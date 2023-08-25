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
    //create div.book-container
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container')
    bookDisplay.appendChild(bookContainer)

    //put book inside book container
    const book = myLibrary[i]

    const bookTitle = document.createElement('div')
    bookTitle.classList.add('book-title')
    bookTitle.innerHTML = book.title
    bookContainer.appendChild(bookTitle)

    const bookAuthor = document.createElement('div')
    bookAuthor.classList.add('book-author')
    bookAuthor.innerHTML = book.author
    bookContainer.appendChild(bookAuthor)

    const bookPages = document.createElement('div')
    bookPages.classList.add('book-pages')
    bookPages.innerHTML = book.pages
    bookContainer.appendChild(bookPages)
    
    const bookReadBtn = document.createElement('button')
    bookReadBtn.classList.add('book-read-btn')
    bookReadBtn.classList.add('book-unread')
    bookReadBtn.innerHTML = 'Read'
    bookContainer.appendChild(bookReadBtn)
    bookReadBtn.onclick = function () {
      if (bookReadBtn.classList.contains('book-unread')) {
        bookReadBtn.classList.remove('book-unread')
        bookReadBtn.classList.add('book-read')
      } else {
        bookReadBtn.classList.remove('book-read')
        bookReadBtn.classList.add('book-unread')
      }
    }

    const bookDeleteBtn = document.createElement('button')
    bookDeleteBtn.classList.add('book-delete-btn')
    bookDeleteBtn.innerHTML = 'delete'
    bookContainer.appendChild(bookDeleteBtn)
    bookDeleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1)
      displayAllBooks()
    })
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



//initial book
theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', 295)
addBookToLibrary(theHobbit)
displayAllBooks()

