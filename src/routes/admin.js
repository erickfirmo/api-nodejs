const express = require('express');
const router = express.Router();

const UserController = require('../controllers/admin/UserController')

router.get('/users', UserController.get);
router.get('/users/:id', UserController.find);
router.post('/users', UserController.store)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.destroy)

module.exports = router;