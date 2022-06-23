const notesListElement = $('#notesList');

const getNotesList = async () => {
	const response = await fetch('/api/items');

	const data = await response.json();

	return data;
};

const renderListItems = (items) => {
	console.log(items);
	const listItems = items
		.map((item) => {
			return `<li
            class="list-group-item d-flex flex-row flex-wrap justify-content-between"
        >
            <div>${item.name}</div>
            <div>
                <button class="btn btn-danger" data-id="${item.id}">🗑</button>
            </div>
        </li>`;
		})
		.join('');

	notesListElement.append(`<ul class="list-group" >${listItems}</ul>`);
};

const onReady = async () => {
	const { items } = await getNotesList();
	renderListItems(items);
};

$(document).ready(onReady);
