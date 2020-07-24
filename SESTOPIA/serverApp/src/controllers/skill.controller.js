"use strict";
const Skill = require("./../models/skill.model");

exports.findAll = function (req, res) {
  Skill.findAll(function (err, skill) {
    console.log("controller");
    if (err) {
      res.send(err);
    } else {
      console.log("res", skill);
      res.send(skill);
    }
  });
};

exports.findById = function (req, res) {
  console.log(req.params.id);
  Skill.findById(req.params.id, function (err, skill) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(skill);
    }
  });
};

exports.create = function (req, res) {
  const new_skill = new Skill(req.body);

  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Skill.create(new_skill, function (err, skill) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "skill added!", data: skill });
      }
    });
  }
};

exports.update = function(req,res) {
  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Skill.update(req.params.id, new Skill(req.body),function(err,skill) {
      if(err){
        res.send(err);
      }else{
        res.json({ error: false, message: "skill updated!"});
      }
    });
  }
};

exports.delete = function(req,res) {
  Skill.delete(req.params.id, function(err, skill) {
    if(err){
      res.send(err);
    } else {
      res.json({ error: false, message: "skill deleted!"});
    }
  });
}
