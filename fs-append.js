var fs = require('fs');

fs.appendFile('testfile.txt','This is my first line',function(err){
    if(err) throw err;
    console.log('File saved');
})