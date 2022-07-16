let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// display a card in book container for each object in the array

function createCard() {
  const bookContainer = document.querySelector('.book-container');
  const cEntry = document.createElement('div');
  const cTitle = document.createElement('p');
  const cAuthor = document.createElement('p');
  const cPages = document.createElement('p');
  const cStatus = document.createElement('p');
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

function openModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// have submit button push the inputted values into the array

const addBtn = document.querySelector('[data-form-submit]');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  // let status = document.getElementById('pages');
  title = title.value;
  author = author.value;
  pages = pages.value;
  let status = 'hey';
  // status = pages.value;
  let newEntry = new Book(title, author, pages, status);
  myLibrary.push(newEntry);
  createCard();
});
