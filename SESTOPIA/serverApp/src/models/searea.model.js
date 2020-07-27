"use strict";

const dbConn = require("./../../config/db.config");

let Searea = function (searea) {
  this.title = searea.title;
};

Searea.create = function (newSe, result) {
  dbConn.query("INSERT INTO searea set ?", newSe, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Searea.findAll = function(result){
  dbConn.query("SELECT * FROM searea", function(err,res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Searea.findById = function (id, result) {
  dbConn.query("SELECT * FROM searea WHERE id=?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Searea.update = function(id,searea, result) {
  dbConn.query("UPDATE searea SET title =? WHERE id=?", [searea.title,id], function(err,res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
}


Searea.delete = function(id, result) {
  dbConn.query("DELETE FROM searea WHERE id=?", [id], function(err,res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


module.exports = Searea;