let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  let title = prompt('title');
  let author = prompt('author');
  let pages = prompt('page count');
  let status = prompt('read or not read?');

  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}

const theHobbit = new Book('The Hobbit', 'Idk', 1232, 'not read');
const harryPotter = new Book('Harry Potter', 'Idk', 2300, 'read');
myLibrary.push(theHobbit);
myLibrary.push(harryPotter);
