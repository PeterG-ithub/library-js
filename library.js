//data storage
const myLibrary = [];

//book constructor
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
    return `${title} by ${author}, ${pages} pages.`
  }
}

//method to add books to library
function addBookToLibrary(book) {
  myLibrary.push(book)
}

//method to display books
const bookDisplay = document.querySelector('.book-display');
function displayAllBooks() {
  bookDisplay.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info())
    const book = document.createTextNode(myLibrary[i].info())
    bookDisplay.appendChild(book)
  }
}

//modal for add book button 
const favDialog = document.getElementById("favDialog");
const add_book = document.querySelector('.add-book');
const title = favDialog.querySelector('.title');
const author = favDialog.querySelector('.author');
const pages = favDialog.querySelector('.pages');
const outputBox = document.querySelector('output');
const confirmBtn = favDialog.querySelector("#confirmBtn");
const cancelBtn = favDialog.querySelector('#cancelBtn');
const form = favDialog.querySelector('form');
add_book.addEventListener('click', ()=> {
  favDialog.showModal();
});

//modal confirm button
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.reportValidity()) {
    let newBook = new Book(title.value, author.value, pages.value);
    addBookToLibrary(newBook);
    favDialog.close();
  }
  displayAllBooks();
})

//modal cancel button
cancelBtn.addEventListener("click", (e)=> {
  favDialog.close();
})

function bookModal() {
  console.log("Hello! I am an alert box!!")
}

theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', 295)
addBookToLibrary(theHobbit)
displayAllBooks()
