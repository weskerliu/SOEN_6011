const express = require('express')

const router = express.Router();

const skillToolController = require('./../controllers/skillTool.controller');

router.get('/skill/:id', skillToolController.findBySkill_id);

router.get('/tool/:id',skillToolController.findByTool_id);

router.post('/',skillToolController.create);

router.put('/:id',skillToolController.update);

router.delete('/:id', skillToolController.delete);


module.exports = router;