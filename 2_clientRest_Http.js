
 
/**
 * Client REST HTTP - GET/POST
 */


var https = require('https');

// options for GET
var options = {
    host : 'watson-api-explorer.mybluemix.net', // here only the domain name
    port : 443,//https
    path : '/alchemy-api/calls/url/URLGetRankedImageKeywords?url=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fca%2F82%2Fe4%2Fca82e4ccae6ab9101eb67481434126d3.jpg&apikey=<APIK>&forceShowAll=1&outputMode=json', // the rest of the url with parameters if needed
    method : 'GET' // do GET/POST
};
 
console.info('Options prepared:');
console.info(options);
console.info('Do the HTTP call');
 
// do the GET/POST request
var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
  
    res.on('data', function(d) {
        console.info('result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });
 
});
 
req.end();
req.on('error', function(e) {
    console.error(e);
});
 
