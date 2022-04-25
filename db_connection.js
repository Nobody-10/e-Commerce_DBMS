//0bYjOlofXT
var mysql = require('mysql');

var con = mysql.createConnection({
  // host: "www.remotemysql.com",
  // user: "JtYOX1tSqF",
  // password: "0bYjOlofXT"
  
  host: "database-1.chhbhlk1tymr.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "databaseadmin"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// let sql = `GRANT ALL PRIVILEGES ON *.* TO 'JtYOX1tSqF'@'www.remotemysql.com' WITH GRANT OPTION;`
// con.query(sql)
// sql = `create table if not exists DBMSProject.loginDetails (username varchar(255), password varchar(255))`

// sql = 'Select * from DBMSProject.loginDetails where username = ?'
// con.query(sql, ['niesh'],function(err, result, fields) {
//   if(err) throw err;
//   // if(fields.length == 0)
//   // {
//   //     res.redirect('/login')
//   // }
//   // else{
//   //     res.redirect('/homepage')
//   // }
//   console.log(result.length);
// })

// sql = `insert into DBMSProject.loginDetails(username, password)
//           values ('nitesh', 'lm10')`
// con.query(sql, function(err, result, fields) {
//   if(err) throw err;
//   console.log(result);
// })
module.exports = con;

