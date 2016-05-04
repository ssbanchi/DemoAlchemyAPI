

/**
 * CLIENT REST -  request module 
 */


var request = require('request');
request('https://watson-api-explorer.mybluemix.net/alchemy-api/calls/url/URLGetRankedImageKeywords?url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fca%2F82%2Fe4%2Fca82e4ccae6ab9101eb67481434126d3.jpg&apikey=<APIK>&forceShowAll=1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})



