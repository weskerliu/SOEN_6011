"use strict";

const dbConn = require("./../../config/db.config");

let Scenario = function (scenario) {
  this.skill_id = scenario.skill_id;
  this.descrption = scenario.descrption;
};

Scenario.create = function (newScenario, result) {
  dbConn.query("INSERT INTO scenario set ?", newScenario, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Scenario.findAll = function (result) {
  dbConn.query("Select * from scenario", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("scenario: ", res);
      result(res, null);
    }
  });
};

Scenario.findBySkill_id = function (id, result) {
  dbConn.query("Select * FROM scenario WHERE Skill_id = ?", [id], function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(res, null);
    }
  });
};

Scenario.update = function (id, scenario, result) {
  dbConn.query(
    "UPDATE scenario SET skill_id=?,descrption=? WHERE id=?",
    [scenario.skill_id, scenario.descrption, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(res, null);
      }
    }
  );
};

Scenario.delete = function (id, result) {
  dbConn.query("DELETE FROM scenario WHERE id= ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      result(null, res);
    }
  });
};


module.exports = Scenario;