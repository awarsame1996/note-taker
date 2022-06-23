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

module.exports = {
	getItems,
	getItem,
};
