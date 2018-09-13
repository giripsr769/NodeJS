// var mysql = require('mysql');

// var con  = mysql.createConnection({

//     host : 'localhost',
//     user : 'root',
//     password : ''
// });

// con.connect(function(err){
//     if(err) throw err;
//     console.log('DataBase connect');
//     con.query('create database mydbsql',function(err,result){
//         if(err) throw err;
//         console.log('mydbsql - DataBase Created');
//     });
// });

//create table
var mysql = require('mysql');

var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydbsql'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Table created');
    var tableQuery = 'create table details(id int primary key not null, name varchar(50))';
    con.query(tableQuery, function (err, result) {
        if (err) throw err;
        console.log('details - Table Created');
    });
});