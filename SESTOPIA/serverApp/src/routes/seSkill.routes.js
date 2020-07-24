const express = require('express')

const router = express.Router();

const seSkillController = require('./../controllers/seSkill.controller');

router.get('/skill/:id', seSkillController.findBySkill_id);

router.get('/se/:id',seSkillController.findByse_id);

router.post('/',seSkillController.create);

router.put('/:id',seSkillController.update);

router.delete('/:id', seSkillController.delete);


module.exports = router;