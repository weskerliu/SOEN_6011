'use strict'
const Skill = require('./../models/skill.model');

exports.findAll = function(req,res){
  Skill.findAll(function(err,skill) {
    console.log('controller');
    if(err){
      res.send(err);

    } else {
      console.log('res', skill);
      res.send(skill);
    }
  });
};