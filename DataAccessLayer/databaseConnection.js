const databaseVar = require('../Config/env.js');
const mysql = require('mysql');

const dbcon = mysql.createConnection({
    host: databaseVar.Host,
    user : databaseVar.User,
    password: databaseVar.Password,
    database: databaseVar.Database
});

dbcon.connect(err=>{
    if (err) throw err;
    console.log("Successfully connected to the database");
})

module.exports={
    dbcon:dbcon
};