var http = require('http');
var dat = require('./ownmodule');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/plain'});
    // res.write(req.url);
    // res.end('Hi Node JS...'+'Today date and time is :'+ dat.mydate());
    var q = url.parse(req.url,true).query;
    var txt = q.month + ' '+q.year;
    res.end(txt);
}).listen(8080);