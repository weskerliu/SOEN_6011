"use strict";

const dbConn = require("../../config/db.config");

let Tool = function (tool) {
  this.name = tool.name;
  this.descrption = tool.descrption;
};

Tool.findAll = function(result){
  dbConn.query("SELECT * FROM tools", function(err,res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Tool.create = function (newTool, result) {
  dbConn.query("INSERT INTO tools set ?", newTool, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Tool.findById = function (id, result) {
  dbConn.query("SELECT * FROM tools WHERE id=?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Tool.update = function (id, tool, result) {
  dbConn.query(
    "UPDATE tools SET name=?, descrption=? WHERE id=?",
    [tool.name, tool.descrption, id],
    function (err, res) {
      if(err){
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Tool.delete = function(id,result){
  dbConn.query("DELETE FROM tools WHERE id =?", [id], function(err,res){
    if(err){
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
}


module.exports = Tool;