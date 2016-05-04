

/**
 * Call Alchemy API via NPM alchemy-api module 
 */

var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('<APIK>');
alchemy.imageKeywords('https://s-media-cache-ak0.pinimg.com/736x/ca/82/e4/ca82e4ccae6ab9101eb67481434126d3.jpg', {}, function(err, response) {
  if (err) throw err;

  var imageKeywords = response.imageKeywords;

  console.log(imageKeywords);
  
});