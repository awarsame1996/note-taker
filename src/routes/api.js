const { Router } = require('express');
const items = require('./items');
const router = Router();

router.use('/items', items);

module.exports = router;
