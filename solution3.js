var fs = require("fs");

//var path = process.argv[2];
//var filter = process.argv[3]

//console.log(path, filter);

module.exports = filterFile;

function filterFile(path, filter, callback) {

  var files = fs.readdir(path, function(err, ls) {
  
  if (err) 
   return callback(err);
    
  
  
  var filteredfiles = [];      
    var files  = ls.toString();
    var filtered =  files.split(',').filter(function(value){
        return value.indexOf("."+filter)>-1;
        
    });
     return callback(null, filtered);
  
  });
}
  
  
