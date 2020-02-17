const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');

router.post('/golfs', golf.create);
router.get('/golfs/:id', golf.findOne);
router.post('/golfs/:id', golf.updateOne);
router.delete('/golfs/:id', golf.deleteOne);
router.get('/golfs', golf.findAll);

module.exports = router;