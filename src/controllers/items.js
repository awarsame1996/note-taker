const { v4: uuidv4 } = require('uuid');

const {
	readDataFromFile,
	writeDataToFile,
} = require('../utils/fileReadWrite');

const getItems = (req, res) => {
	// get all items from file
	const items = readDataFromFile('items');

	// send all items as response
	return res.json(items);
};
const getItem = (req, res) => {
	// get id from req
	const { itemId } = req.params;

	// get all items from file
	const { items } = readDataFromFile('items');

	// find item by itemId
	const item = items.find((item) => item.id === itemId);

	// return response with item
	return res.json(item);
};
const deleteItem = (req, res) => {
	// get id from req
	const { itemId } = req.params;

	// get all items from file
	const { items } = readDataFromFile('items');

	// remove item from file
	const filteredItems = items.filter((item) => item.id !== itemId);

	writeDataToFile('items', { items: filteredItems });

	// send response
	return res.json({
		message: 'Successfully deleted shopping item',
	});
};
const createItem = (req, res) => {
	console.log(req.body);
	// get the payload from req body
	const { name } = req.body;

	// create uuid
	const id = uuidv4();

	// create the item object
	const item = {
		id,
		name,
		noteText,
	};

	// get all items from file
	const data = readDataFromFile('items');

	// push new item to items
	data.items.push(item);

	// write all items to file
	writeDataToFile('items', data);

	// send response
	return res.json({
		message: 'Successfully created new shopping item',
	});
};

module.exports = {
	getItems,
	getItem,
	deleteItem,
	createItem,
};
