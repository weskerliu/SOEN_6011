const express = require('express')

const router = express.Router();

const toolController = require('./../controllers/tool.controller');

router.get('/', toolController.findAll);

router.get('/id/', toolController.findById);

router.post('/', toolController.create);

router.put('/', toolController.update);

router.delete('/', toolController.delete);


module.exports = router;