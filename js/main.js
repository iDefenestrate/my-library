const bookContainer = document.querySelector('.book-container');

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// display a card in book container for each object in the array

const pasteCard = (item) => {
  const cEntry = document.createElement('div');
  const cTitle = document.createElement('p');
  const cAuthor = document.createElement('p');
  const cPages = document.createElement('p');
  const cStatus = document.createElement('btn');
  const removeBtn = document.createElement('btn');
  cEntry.appendChild(cTitle);
  cEntry.appendChild(cAuthor);
  cEntry.appendChild(cPages);
  cEntry.appendChild(cStatus);
  cEntry.appendChild(removeBtn);
  cEntry.classList.add('card');
  cTitle.textContent = item.title.toUpperCase();
  cAuthor.textContent = 'by ' + item.author;
  cPages.textContent = item.pages + ' pages';
  cStatus.classList.add('status-button');
  cStatus.textContent = item.status;
  removeBtn.classList.add('remove-button');
  removeBtn.textContent = 'Remove';
  bookContainer.appendChild(cEntry);
};

// create pop-up form

const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  openModal(modal);
});

overlay.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  closeModal(modal);
});

closeModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  closeModal(modal);
});

const openModal = (modal) => {
  modal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = (modal) => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

const wipeModal = (modal) => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  title.value = '';
  author.value = '';
  pages.value = '';
};

// have submit button push the inputted values into the array + create the card

const form = document.getElementById('form');
const modal = document.querySelector('.modal');

const createEntry = () => {
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let status = document.getElementById('status');
  title = title.value;
  author = author.value;
  pages = pages.value;

  if (status.checked) {
    status = 'Read';
  } else {
    status = 'Not Read';
  }

  let newEntry = new Book(title, author, pages, status);
  myLibrary.push(newEntry);
};

const createCard = () => {
  myLibrary.forEach((item) => {
    pasteCard(item);
  });
};

const addEntry = () => {
  createEntry();
  bookContainer.textContent = '';
  createCard();
  wipeModal(modal);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addEntry();
});

// Reset Library

const resetBtn = document.querySelector('[data-reset-library]');

const reset = () => {
  const bookContainer = document.querySelector('.book-container');
  myLibrary.length = 0;
  bookContainer.textContent = '';
};

resetBtn.onclick = reset;

// Add a button on each book’s display to remove the book from the library
// associate DOM elements with the actual book objects in some way
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.

//  create a function that toggles a book’s read status on your Book prototype instance.
