"use strict";

const dbConn = require("./../../config/db.config");

let SeSkill = function (seSkill) {
  this.skill_id = seSkill.skill_id;
  this.se_id = seSkill.se_id;
};

SeSkill.create = function (newSeSkill, result) {
  dbConn.query("INSERT INTO seskill set ?", newSeSkill, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

SeSkill.findBySkill_id = function (id, result) {
  dbConn.query("SELECT * FROM seskill WHERE skill_id=?", [id], function (
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

SeSkill.findBySE_id = function (id, result) {
  dbConn.query("SELECT * FROM seskill WHERE se_id=?", [id], function (
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

SeSkill.update = function (id, SeSkill, result) {
  dbConn.query(
    "UPDATE seskill SET skill_id=?, sel_id=? WHERE id=?",
    [SeSkill.skill_id, SeSkill.se_id, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

SeSkill.delete = function (id, result) {
  dbConn.query("DELETE FROM seskill WHERE id=?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
};

module.exports = SeSkill;
