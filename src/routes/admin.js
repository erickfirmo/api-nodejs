const express = require('express');
const router = express.Router();

const UserController = require('../controllers/admin/UserController')

router.get('/users', UserController.get);
router.get('/users/:id', UserController.find);
router.post('/users/store', UserController.store)
router.put('/users/update/:id', UserController.update)

module.exports = router;