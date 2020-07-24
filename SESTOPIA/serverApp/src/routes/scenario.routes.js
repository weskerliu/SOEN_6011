const express = require('express')

const router = express.Router();

const scenarioController = require('./../controllers/scenario.controller');

router.get('/', scenarioController.findAll);

router.get('/:id',scenarioController.findBySkill_id);

router.post('/',scenarioController.create);

router.put('/:id', scenarioController.update);

router.delete('/:id', scenarioController.delete);

module.exports = router;