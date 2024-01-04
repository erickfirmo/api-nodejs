const express = require('express');
const router = express.Router();

const userController = require('../controllers/admin/UserController')

router.get('/admin', userController.get);

module.exports = router;