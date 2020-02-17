const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const managerRouter = require('./manager.route');

router.use(userRouter);
router.use(authRouter);
router.use(managerRouter);

module.exports = router;