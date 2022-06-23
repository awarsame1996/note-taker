const notesListElement = $('#notesList');

const getNotesList = async () => {
	// get the data from the database in api
	const response = await fetch('/api/items');

	const data = await response.json();

	return data;
};

const handleCLick = async (event) => {
	// find out which targe is clicked
	const target = $(event.target);

	// if statement for when the target is the delete button
	if (target.is('button[name="delete-btn"]')) {
		const itemId = target.attr('data-id');
		console.log(itemId);
	}
	if (target.is('li[name="note-item"]')) {
		const itemId = target.attr('data-id');
		console.log('items id: ' + itemId);
	}
};

const renderListItems = (items) => {
	console.log(items);
	const listItems = items
		.map((item) => {
			return `<li
            class="list-group-item d-flex flex-row flex-wrap justify-content-between"
			name="note-item" data-id="${item.id}"
        >
            <div>${item.name}</div>
            <div>
                <button class="btn btn-danger" name="delete-btn" data-id="${item.id}">🗑</button>
            </div>
        </li>`;
		})
		.join('');

	notesListElement.append(
		`<ul class="list-group" id="notes-list-container">${listItems}</ul>`
	);
	$('#notes-list-container').click(handleCLick);
};

const onReady = async () => {
	const { items } = await getNotesList();
	renderListItems(items);
};

$(document).ready(onReady);
