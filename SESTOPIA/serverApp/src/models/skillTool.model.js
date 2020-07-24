"use strict";

const dbConn = require("./../../config/db.config");

let SkillTool = function (skillTool) {
  this.skill_id = skillTool.skill_id;
  this.tool_id = skillTool.tool_id;
};

SkillTool.create = function (newSkillTool, result) {
  dbConn.query("INSERT INTO skilltool set ?", newSkillTool, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

SkillTool.findBySkill_id = function (id, result) {
  dbConn.query("SELECT * FROM skilltool WHERE skill_id=?", [id], function (
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

SkillTool.findByTool_id = function (id, result) {
  dbConn.query("SELECT * FROM skilltool WHERE tool_id=?", [id], function (
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

SkillTool.update = function (id, skillTool, result) {
  dbConn.query(
    "UPDATE skilltool SET skill_id=?, tool_id=? WHERE id=?",
    [skillTool.skill_id, skillTool.tool_id, id],
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

SkillTool.delete = function(id, result){
  dbConn.query("DELETE FROM skilltool WHERE id=?", [id], function(err,res){
    if (err) {
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
};


module.exports = SkillTool;