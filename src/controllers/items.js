const getItems = (req, res) => {
	// get all items form files
	// send all items as response
	return res.json({
		items: [
			{
				id: 'f031df58-30a8-4125-bcc7-f89e094a5a3b',
				name: ' Item 1',
				noteTitle: 'notes 1',
				noteText: 'lorem ipsum',
			},
			{
				id: '14e60076-78d8-4f4e-b453-c172721db46f',
				name: 'Item 2',
				noteTitle: 'notes 2',
				noteText: 'lorem ipsum',
			},
			{
				id: 'b942b355-ccc8-4705-a294-4db793645fd6',
				name: 'Item 3',
				noteTitle: 'notes 3',
				noteText: 'lorem ipsum',
			},
			{
				id: 'b838f1dc-de1a-42be-b3e5-d152aa402cf5',
				name: 'Item 4',
				noteTitle: 'notes 4',
				noteText: 'lorem ipsum',
			},
		],
	});
};

module.exports = {
	getItems,
};
