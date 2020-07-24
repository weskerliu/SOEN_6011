"use strict"

const SeSkill = require('./../models/seSkill.model');

exports.findBySkill_id = function (req, res) {
  console.log(req.params.id);
  SeSkill.findBySkill_id(req.params.id, function (err, seSkill) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(seSkill);
    }
  });
};

exports.findByse_id = function (req, res) {
  console.log(req.params.id);
  SeSkill.findByse_id(req.params.id, function (err, seSkill) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(seSkill);
    }
  });
};

exports.create = function (req, res) {
  const new_skillTool = new SkillTool(req.body);

  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    SeSkill.create(new_skillTool, function (err, seSkill) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "seSkill added!", data: seSkill });
      }
    });
  }
};


exports.update = function(req,res) {
  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    SeSkill.update(req.params.id, new SkillTool(req.body),function(err,seSkill) {
      if(err){
        res.send(err);
      }else{
        res.json({ error: false, message: "seSkill updated!"});
      }
    });
  }
};


exports.delete = function(req,res) {
  SeSkill.delete(req.params.id, function(err, seSkill) {
    if(err){
      res.send(err);
    } else {
      res.json({ error: false, message: "seSkill deleted!"});
    }
  });
}
