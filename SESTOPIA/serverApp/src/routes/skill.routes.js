const express = require('express')

const router = express.Router();

const skillController = require('./../controllers/skill.controller');

router.get('/', skillController.findAll);

router.get('/:id',skillController.findById);

router.post('/',skillController.create);

router.put('/:id',skillController.update);

router.delete('/:id', skillController.delete);


module.exports = router;