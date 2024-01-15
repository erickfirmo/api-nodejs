const express = require('express');
const router = express.Router();

const UserController = require('../controllers/admin/UserController')

router.get('/users', UserController.get);

module.exports = router;