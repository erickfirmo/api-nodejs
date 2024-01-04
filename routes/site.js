const express = require('express');
const router = express.Router();

const siteController = require('../controllers/site/SiteController')

router.get('/', siteController.home);
router.get('/contato', siteController.contato);

module.exports = router;