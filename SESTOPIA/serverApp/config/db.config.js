"use strict";

const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sestopia",
});

dbConn.connect(function(err) {
  if(err){
    throw err;
  } else {
    console.log("Database connected!");
  }
});

module.exports = dbConn;
