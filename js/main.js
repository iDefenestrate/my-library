let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let title = prompt('title');
  let author = prompt('author');
  let pages = prompt('page count');
  let status = prompt('read or not read?');

  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);

  createCard(newBook);
}

const theHobbit = new Book('The Hobbit', 'Idk', 1232, 'not read');
const harryPotter = new Book('Harry Potter', 'Idk', 2300, 'read');
myLibrary.push(theHobbit);
myLibrary.push(harryPotter);

const btn = document.querySelector('.add-btn');
btn.addEventListener('click', addBookToLibrary);

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// display a card in book container for each object in the myLibrary array

myLibrary.forEach((item) => {
  const bookContainer = document.querySelector('.book-container');
  const cEntry = document.createElement('div');
  const cTitle = document.createElement('p');
  const cAuthor = document.createElement('p');
  const cPages = document.createElement('p');
  const cStatus = document.createElement('p');
  cEntry.appendChild(cTitle);
  cEntry.appendChild(cAuthor);
  cEntry.appendChild(cPages);
  cEntry.appendChild(cStatus);
  cEntry.classList.add('card');
  cTitle.textContent = item.title.toUpperCase();
  cAuthor.textContent = item.author;
  cPages.textContent = item.pages + ' pages';
  cStatus.textContent = item.status;
  bookContainer.appendChild(cEntry);
});

// create pop-up form that creates an object for each submission and pushes it to myLibrary array
