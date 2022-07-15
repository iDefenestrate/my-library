const formBtn = document.querySelector('form-btn');
const bookContainer = document.querySelector('.book-container');
const cEntry = document.createElement('div');
const cTitle = document.createElement('p');
const cAuthor = document.createElement('p');
const cPages = document.createElement('p');
const cStatus = document.createElement('p');

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// display a card in book container for each object in the myLibrary array

function createCard() {
  myLibrary.forEach((item) => {
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
}

const theHobbit = new Book('The Hobbit', 'Mister Person', 1232, 'not read');
myLibrary.push(theHobbit);

createCard();

// create pop-up form that creates an object for each submission and pushes it to myLibrary array

const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  openModal(modal);
});

closeModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
