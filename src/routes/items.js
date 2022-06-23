const { Router } = require('express');
const { getItems, getItem } = require('../controllers/items');

const router = Router();

router.get('/', getItems);
router.get('/:itemId', getItem);

module.exports = router;
