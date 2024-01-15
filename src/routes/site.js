const express = require('express');
const router = express.Router();

const SiteController = require('../controllers/site/SiteController')

router.get('/', SiteController.home);
router.get('/contato', SiteController.contato);

module.exports = router;