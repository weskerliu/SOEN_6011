
const express = require('express');

const router = express.Router();

const referenceController = require("./../controllers/reference.controller");


router.get('/:id',referenceController.findBySkill_id);

router.post('/',referenceController.create);

router.put('/:id',referenceController.update);

router.delete('/:id', referenceController.delete);


module.exports = router;