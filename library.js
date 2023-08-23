const myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
    return `${title} by ${author}, ${pages} pages.`
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayAllBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info())
  }
}


theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', 295)
addBookToLibrary(theHobbit)
