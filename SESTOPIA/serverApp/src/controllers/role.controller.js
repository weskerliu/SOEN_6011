"use strict";

const Role = require('./../models/role.model');



exports.create = function (req, res) {
  const new_role = new Role(req.body);

  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Role.create(new_role, function (err, role) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "skill added!", data: role });
      }
    });
  }
};

exports.findAll = function(req,res) {
  Role.findAll(function(err,role){
    if (err) {
      res.send(err);
    } else {
      res.json(role);
    }
  });
};

exports.findById = function (req, res) {
  Role.findById(req.body.id, function (err, role) {
    console.log("function");
    if (err) {
      res.send(err);
    } else {
      res.json(role);
    }
  });
};

exports.update = function(req,res) {
  if(!req.body){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Role.update(req.body.id, new Role(req.body),function(err,role) {
      if(err){
        res.send(err);
      }else{
        res.json({ error: false, message: "role updated!", data:role});
      }
    });
  }
};


exports.delete = function(req,res) {
  Role.delete(req.body.id, function(err, role) {
    if(err){
      res.send(err);
    } else {
      res.json({ error: false, message: "skill deleted!"});
    }
  });
}
