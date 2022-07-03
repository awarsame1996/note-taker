const path = require('path');

const renderHomePage = (req, res) => {
	// get file path
	const filePath = path.join(__dirname, '../../public/index.html');

	// send file
	return res.sendFile(filePath);
};

const renderNotesPage = (req, res) => {
	// get file path
	const filePath = path.join(__dirname, '../../public/notes.html');

	// send file
	return res.sendFile(filePath);
};

module.exports = {
	renderHomePage,
	renderNotesPage,
};
