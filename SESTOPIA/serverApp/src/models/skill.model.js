"use strict";

const dbConn = require("./../../config/db.config");

let Skill = function (skill) {
  this.title = skill.title;
  this.author = skill.author;
  this.prerequisites = skill.prerequisites;
  this.classification = skill.classification;
  this.rationaleForSkill = skill.rationaleForSkill;
  this.work_relate = skill.work_relate;
  this.roleofCultivatingSkill = skill.roleofCultivatingSkill;
  this.selfAssessment_score = skill.selfAssessment_score;
  this.reason = skill.reason;
};

let SkillTool = function (skillTool) {
  this.skill_id = skillTool.skill_id;
  this.tool_id = skillTool.tool_id;
};

Skill.create = function (newSkill,tool_id,roles_id,se_id, result) {
  dbConn.query("INSERT INTO skill SET ?", newSkill, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      let value = [];
      const skill_id = res.insertId;
      for(const index in tool_id){
        let skillTool = [skill_id, tool_id[index]];
        value.push(skillTool);
      }
      console.log(value);
      dbConn.query("INSERT INTO skilltool (skill_id, tool_id) VALUES?",[value],function(err,res){
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log(res.insertId);
        }
      });

      value = [];
      console.log("value ", value);
      console.log("roles_id: ",roles_id);
      for(const index in roles_id){
        let skillRole = [skill_id, roles_id[index]]
        value.push(skillRole);
      }
      console.log("after value ", value);
      dbConn.query("INSERT INTO rolesforskill (skill_id, roles_id) VALUES?", [value], function(err,res){
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log(res.insertId);
        }
      });
      console.log("se_id: ", se_id)
      dbConn.query("INSERT INTO seskill SET skill_id=?, se_id=?", [skill_id,se_id], function(err,res){
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log(res.insertId);
        }
      });

      result(null, res.insertId);
    }
  });
};

Skill.findById = function (id, result) {
  console.log(id);
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
    "UPDATE skill SET title=?,author=?,prerequisites=?,classification=?, rationaleForSkill=?, work_relate=?, roleofCultivatingSkill=?, selfAssessment_score=?, reason=? WHERE id =?",
    [
      skill.title,
      skill.author,
      skill.prerequisites,
      skill.classification,
      skill.rationaleForSkill,
      skill.work_relate,
      skill.roleofCultivatingSkill,
      skill.selfAssessment_score,
      skill.reason,
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

Skill.delete = function (id, result) {
  dbConn.query("DELETE FROM skill WHERE id =?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Skill;
