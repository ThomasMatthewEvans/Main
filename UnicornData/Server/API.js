
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "unicorndata"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

var UserInput = require('USERINPUT'); 

con.connect(function (err) {
    if (err) throw err;

    con.query("SELECT * FROM mydb.cars WHERE MATCH(make) AGAINST('USERINPUT' IN NATURAL LANGUAGE MODE)",

        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
});
