"use strict";

const Searea =  require('./../models/searea.model');

exports.create = function(req,res){
  const new_searea = new Searea(req.body);

  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Skill.create(new_searea, function (err, searea) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "software engnieer area added!", data: searea });
      }
    });
  }
};

exports.findAll = function (req, res) {
  Searea.findAll(function (err, searea) {
    console.log("controller");
    if (err) {
      res.send(err);
    } else {
      console.log("res", searea);
      res.send(searea);
    }
  });
};

exports.findById = function (req, res) {
  console.log(req.params.id);
  Skill.findById(req.params.id, function (err, skiseareall) {
    if (err) {
      res.send(err);
    } else {
      res.json(searea);
    }
  });
};

exports.update = function(req,res) {
  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Skill.update(req.params.id, new Searea(req.body),function(err,searea) {
      if(err){
        res.send(err);
      }else{
        res.json({ error: false, message: "sksoftware engnieer area updated!"});
      }
    });
  }
};

exports.delete = function(req,res) {
  Skill.delete(req.params.id, function(err, searea) {
    if(err){
      res.send(err);
    } else {
      res.json({ error: false, message: "software engnieer area deleted!"});
    }
  });
}