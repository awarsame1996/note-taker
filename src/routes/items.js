const { Router } = require('express');
const {
	getItems,
	getItem,
	deleteItem,
	createItem,
} = require('../controllers/items');

const router = Router();

router.get('/', getItems);
router.get('/:itemId', getItem);
router.delete('/:itemId', deleteItem);
router.post('/', createItem);

module.exports = router;
