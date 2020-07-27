const express = require('express')

const router = express.Router();

const roleController = require('./../controllers/role.controller');

router.get('/', roleController.findAll);

router.get('/id/', roleController.findById);

router.post('/', roleController.create);

router.put('/', roleController.update);

router.delete('/', roleController.delete);


module.exports = router;