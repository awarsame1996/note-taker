const notesListElement = $('#notesList');
const notesElement = $('#notes');
const saveButton = $('#save-note');
const newButton = $('#new-note');

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
		// make a DELETE request to /api/items/id
		const response = await fetch(`/api/items/${itemId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		await response.json();
		renderListItems(items);
	}
	if (target.is('li[name="note-item"]')) {
		// identify the item clicked by getting item id
		const itemId = target.attr('data-id');
		console.log('items id: ' + itemId);
		// retrieve item from api using ID

		const response = await fetch(`/api/items/${itemId}`);

		const item = await response.json();
		renderItem(item);
	}
};
const handleSaveClick = async () => {};
const renderItem = (item) => {
	const noteContainer = $('#notes-container');
	noteContainer.remove();
	notesElement.append(`<div class="col-8" id="notes">
	<div id="notes-container">
		<input
			class="note-title"
			placeholder="${item.noteTitle}"
			maxlength="28"
			type="text"
			id="noteTitle"
		/>
		<textarea
			class="note-textarea"
			placeholder=""
		>${item.noteText}</textarea>
	</div>
</div>`);
};

const renderListItems = async (items) => {
	console.log(items);
	const notesContainer = $('#notes-list-container');
	notesContainer.remove();
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
const getNewNote = async () => {
	saveButton.removeClass('save-note');
	const noteContainer = $('#notes-container');
	noteContainer.remove();
	notesElement.append(`<div class="col-8" id="notes">
	<div id="notes-container">
		<input
			class="note-title"
			placeholder="Note Title"
			maxlength="28"
			type="text"
			id="noteTitle"
		/>
		<textarea
			class="note-textarea"
			placeholder="Note Text"
		></textarea>
	</div>
</div>`);
};

const onReady = async () => {
	const { items } = await getNotesList();
	renderListItems(items);
};
$(newButton).click(getNewNote);

$(document).ready(onReady);
