const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2)

const fetcher = (url, filepath) => {

  request(url, //website user requests
    (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`)

    fs.writeFile(filepath, body, err => {
      if (err) {
        return "error"
      }
    })
  });  
};



fetcher(input[0], input[1]);