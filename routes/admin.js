const express = require('express');
const router = express.Router();

const userController = require('../controllers/admin/UserController')

router.get('/user', userController.get);

module.exports = router;