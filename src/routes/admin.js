const express = require('express');
const router = express.Router();

const UserController = require('../controllers/admin/UserController')

router.get('/users', UserController.get);
router.get('/users/:id', UserController.find);

module.exports = router;