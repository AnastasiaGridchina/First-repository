let users = [
	{name: 'name1',  surname: 'surname1',  age: 30},
	{name: 'name2',  surname: 'surname2',  age: 30},
	{name: 'name3',  surname: 'surname3',  age: 30},
	{name: 'name4',  surname: 'surname4',  age: 30},
];

let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');

let notesOnPage = 3;
let countOfItems = Math.ceil(users.length / notesOnPage);

let showPage = (function() {
	let active;
	
	return function(item) {
		if (active) {
			active.classList.remove('active');
		}
		active = item;
		
		item.classList.add('active');
		
		let pageNum = +item.innerHTML;
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		
		let notes = users.slice(start, end);
		
		table.innerHTML = '';
		for (let note of notes) {
			let tr = document.createElement('tr');
			table.appendChild(tr);
			
			createCell(note.name, tr);
			createCell(note.surname, tr);
			createCell(note.age, tr);
		}
	};
}());

let items = [];
for (let i = 1; i <= countOfItems; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	pagination.appendChild(li);
	items.push(li);
}

showPage(items[0]);

for (let item of items) {
	item.addEventListener('click', function() {
		showPage(this);
	});
}

function createCell(text, tr) {
	let td = document.createElement('td');
	td.innerHTML = text;
	tr.appendChild(td);
}