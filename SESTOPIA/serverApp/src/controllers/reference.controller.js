"use strict";

const Reference = require("./../models/reference.model");

exports.create = function (req, res) {
  const new_reference = new Reference(req.body);

  if (!req.body) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Reference.create(new_reference, function (err, reference) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "reference added!", data: reference });
      }
    });
  }
};

exports.findBySkill_id = function (req, res) {
  Reference.findBySkill_id(req.params.id, function (err, reference) {
    if (err) {
      res.send(err);
    } else {
      res.json(reference);
    }
  });
};

exports.update = function (req, res) {
  if (!req.body) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Reference.update(req.params.id, new Reference(req.body), function (
      err,
      reference
    ) {
      if (err) {
        res.send(err);
      } else {
        res.json({ error: false, message: "reference updated!" });
      }
    });
  }
};

exports.delete = function (req, res) {
  Reference.delete(req.params.id, function (err, reference) {
    if (err) {
      res.send(err);
    } else {
      res.json({ error: false, message: "reference deleted!" });
    }
  });
};
