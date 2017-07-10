var mysql = require('mysql');
var CONFIG = require('./config.json');

var dbPort = CONFIG.dbPort;
var dbHost = CONFIG.dbHost;
var dbUser = CONFIG.dbUser;
var dbPassword = CONFIG.dbPassword;


var connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    port: dbPort
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();



