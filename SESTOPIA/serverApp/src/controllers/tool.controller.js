"use strict";

const Tool = require('./../models/tool.model');

exports.findAll = function(req,res) {
  Tool.findAll(function(err,tool){
    if (err) {
      res.send(err);
    } else {
      res.json(tool);
    }
  });
};

exports.create = function (req, res) {
  const new_tool = new Tool(req.body);

  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Tool.create(new_tool, function (err, tool) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "skill added!", data: tool });
      }
    });
  }
};

exports.findById = function (req, res) {
  Tool.findById(req.body.id, function (err, tool) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(tool);
    }
  });
};

exports.update = function(req,res) {
  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Tool.update(req.body.id, new Tool(req.body),function(err,tool) {
      if(err){
        res.send(err);
      }else{
        res.json({ error: false, message: "tool updated!", data:tool});
      }
    });
  }
};


exports.delete = function(req,res) {
  Tool.delete(req.body.id, function(err, tool) {
    if(err){
      res.send(err);
    } else {
      res.json({ error: false, message: "skill deleted!"});
    }
  });
}
