"use strict"
const dbConn = require("../../config/db.config");

let Role = function(role){
  this.name = role.name;
  this.descrption = role.descrption;
}

Role.create = function(new_role, result){
  dbConn.query("INSERT INTO roles SET ?", new_role, function(err,res){
    if(err){
      console.log("error: ", err);
      result(err,null);
    }else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Role.findById = function (id, result) {
  dbConn.query("SELECT * FROM roles WHERE id=?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Role.findAll = function(result){
  dbConn.query("SELECT * FROM roles", function(err,res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Role.update = function (id, role, result) {
  dbConn.query(
    "UPDATE roles SET name=?, descrption=? WHERE id=?",
    [role.name, role.descrption, id],
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

Role.delete = function(id,result){
  dbConn.query("DELETE FROM roles WHERE id =?", [id], function(err,res){
    if(err){
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
}

module.exports = Role;