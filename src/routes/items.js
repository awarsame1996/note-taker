const { Router } = require('express');
const { getItems, getItem, deleteItem } = require('../controllers/items');

const router = Router();

router.get('/', getItems);
router.get('/:itemId', getItem);
router.delete('/:itemId', deleteItem);

module.exports = router;
