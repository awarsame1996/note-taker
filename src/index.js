console.log('hi');

const path = require('path');
const express = require('express');

const routes = require('./routes/');

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

app.listen(PORT, () =>
	console.log(`server running on http://localhost:${PORT}`)
);
