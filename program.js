var fs = require("fs");
var ff = require("./solution3.js")

var path = process.argv[2];
var filter = process.argv[3]

//console.log(path, filter);

var files =  ff(path, filter, function(err, ls) {
  console.log(ls.join('\n'));
  
});
      
  
  
