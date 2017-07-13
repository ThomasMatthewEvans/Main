
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "unicorndata"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query(`SELECT * FROM (

            SELECT 
            'Cars' as 'Results', Make, Model, Year, Estimate,
            (MATCH(Make) AGAINST ('Ferrari')) as relevance 
            from mydb.cars 
            UNION 
            SELECT 
            'Manuscripts' as 'Results', Name, Author, Published_date, Estimate,
            (MATCH(author) AGAINST ('Ferrari')) as relevance
            from mydb.manuscripts 
            UNION 
            SELECT 
            'Paintings' as 'Results', Artist, name, Date, Estimate, 
            (MATCH(artist) AGAINST ('Ferrari')) as relevance 
            from mydb.paintings
)
            as sitewide WHERE relevance > 0;`)

}); 






//var UserInput = require('USERINPUT'); 



   // con.query("SELECT * FROM mydb.cars WHERE MATCH(make,model) AGAINST ('USERINPUT' IN NATURAL LANGUAGE MODE)",
//
//function (err, result, fields) {
//    if (err) throw err;
//    console.log(result);
//});


