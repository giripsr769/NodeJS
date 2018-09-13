var express = require('express');
var app = express();

app.get('/myget', function (req, res) {
    console.log('Got a GET request for the homepage');
    res.send('GET method');
});

app.post('/mypost', function (req, res) {
    console.log('Got a POST request for the homepage');
    res.send('POST method');
});

app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
});

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});
