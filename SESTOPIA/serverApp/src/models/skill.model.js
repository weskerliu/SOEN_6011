"use strict";

const dbConn = require("./../../config/db.config");

let Skill = function (skill) {
  this.title = skill.title;
  this.rationaleForSkill = skill.rationaleForSkill;
  this.rolesForSkill = skill.rolesForSkill;
  this.selfAssessment_id = skill.selfAssessment_id;
};

Skill.create = function (newSkill, result) {
  dbConn.query("INSERT INTO skill set ?", newSkill, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Skill.findById = function (id, result) {
  console.log(id)
  dbConn.query("Select * from skill where id =?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Skill.findAll = function (result) {
  dbConn.query("Select * from skill", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("skill : ", res);
      result(null, res);
    }
  });
};

Skill.update = function (id, skill, result) {
  dbConn.query(
    "UPDATE skill SET title=?,rationaleForSkill=?,rolesForSkill=?,selfAssessment_id=? WHERE id =?",
    [
      skill.title,
      skill.rationaleForSkill,
      skill.rolesForSkill,
      skill.selfAssessment_id,
      id,
    ],
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

Skill.delete = function(id, result){
  dbConn.query("DELETE FROM skill WHERE id =?", [id],function(err,res){
    if(err){
      console.log("error: ", err);
    } else {
      result(null,res);
    }
  });
};

module.exports = Skill;
