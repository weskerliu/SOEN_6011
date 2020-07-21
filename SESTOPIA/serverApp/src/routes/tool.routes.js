const express = require('express')

const router = express.Router();

const toolController = require('./../controllers/tool.controller');

router.get('/:id', toolController.findById);

router.post('/', toolController.create);

router.put('/:id', toolController.update);

router.delete('/:id', toolController.delete);


module.exports = router;