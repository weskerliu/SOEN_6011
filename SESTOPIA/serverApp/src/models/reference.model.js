"use strict";

const dbConn = require("./../../config/db.config");

let Reference = function (reference) {
  this.skill_id = reference.skill_id;
  this.descrption = reference.descrption;
};

Reference.create = function (newRef, result) {
  dbConn.query("INSERT INTO reference set ?", newRef, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Reference.findBySkill_id = function (id, result) {
  dbConn.query("SELECT * FROM reference WHERE skill_id=?", [id], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Reference.update = function (id, reference, result) {
  dbConn.query(
    "UPDATE reference SET skill_id=?,descrption=? WHERE id=?",
    [reference.skill_id, reference.descrption, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Reference.delete = function (id, result) {
  dbConn.query("DELETE FROM reference WHERE id=?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


module.exports = Reference;