"use strict";

const Scenario = require("./../models/scenario.model");

exports.create = function (req, res) {
  const new_scenario = new Scenario(req.body);
  if (!req.body) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Scenario.create(new_scenario, function (err, scenario) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "scenario added!", data: scenario });
      }
    });
  }
};

exports.findBySkill_id = function (req, res) {
  Scenario.findBySkill_id(req.params.id, function (err, scenario) {
    if (err) {
      res.send(err);
    } else {
      res.json(scenario);
    }
  });
};

exports.findAll = function (req, res) {
  Scenario.findAll(function (err, scenario) {
    if (err) {
      res.send(err);
    } else {
      res.send(scenario);
    }
  });
};

exports.update = function (req, res) {
  if (!req.body) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Scenario.update(req.params.id, new Scenario(req.body), function (
      err,
      scenario
    ) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "scenario updated!" });
      }
    });
  }
};

exports.delete = function (req, res) {
  Scenario.delete(req.params.id, function (err, scenario) {
    if (err) {
      console.log("error");
      res.send(err);
    } else {
      res.json({ error: false, message: "scenario deleted!" });
    }
  });
};
