const express = require('express')

const router = express.Router();

const seareaController = require('./../controllers/searea.controller');


router.get('/:id',seareaController.findById);

router.post('/',seareaController.create);

router.put('/:id',seareaController.update);

router.delete('/:id', seareaController.delete);


module.exports = router;