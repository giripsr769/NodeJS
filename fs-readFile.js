var http = require('http');
var fs =  require('fs');

 http.createServer(function(req, res){
        fs.readFile('index.html',function(err, output){
         res.writeHead(200,{'content-type' : 'text/html'});
         res.write(output);
         res.end();
     });
 }).listen(8080);