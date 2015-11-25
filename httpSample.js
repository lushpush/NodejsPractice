var http = require("http");
var uri = process.argv[2];


http.get(uri,function(response){
   
   response.on("data", function(data) {
        console.log(data.toString());
   })
    
    
    
});




