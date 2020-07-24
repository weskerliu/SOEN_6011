"use strict"

const SkillTool = require('./../models/skillTool.model');

exports.findBySkill_id = function (req, res) {
  console.log(req.params.id);
  SkillTool.findBySkill_id(req.params.id, function (err, skillTool) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(skillTool);
    }
  });
};

exports.findByTool_id = function (req, res) {
  console.log(req.params.id);
  SkillTool.findByTool_id(req.params.id, function (err, skillTool) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(skillTool);
    }
  });
};

exports.create = function (req, res) {
  const new_skillTool = new SkillTool(req.body);

  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Skill.create(new_skillTool, function (err, skillTool) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "skillTool added!", data: skillTool });
      }
    });
  }
};


exports.update = function(req,res) {
  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    SkillTool.update(req.params.id, new SkillTool(req.body),function(err,skillTool) {
      if(err){
        res.send(err);
      }else{
        res.json({ error: false, message: "skillTool updated!"});
      }
    });
  }
};


exports.delete = function(req,res) {
  SkillTool.delete(req.params.id, function(err, skillTool) {
    if(err){
      res.send(err);
    } else {
      res.json({ error: false, message: "skillTool deleted!"});
    }
  });
}
