const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');

router.post('/managers', manager.create);
router.get('/managers/:id', manager.findOne);
router.post('/managers/:id', manager.updateOne);
router.delete('/managers/:id', manager.deleteOne);
router.get('/managers', manager.findAll);
// router.put('/managers/:id', manager.updateOne);

module.exports = router;