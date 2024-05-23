const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//Default Books
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', "295", false);
myLibrary[0] = theHobbit;
const atomicHabits = new Book('Atomic Habits', 'James Clear', "306", true);
myLibrary[1] = atomicHabits;
const gameOfThrones1 = new Book('A Game of Thrones', 'George R. R. Martin', "	694", true);
myLibrary[2] = gameOfThrones1;

const container = document.getElementById('bookCardContainer');

function addBookToLibrary(myLibrary) {
  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'bookCard';

    const bookCardHeader = document.createElement('div');
    bookCardHeader.className = 'bookCardHeader';
    bookCardHeader.textContent = book.title; 

    if (book.isRead) {
      bookCardHeader.classList.add('readBookHeader');
    } else {
      bookCardHeader.classList.add('notReadBookHeader');
    }
  
    const bookCardAuthorTitle = document.createElement('div');
    bookCardAuthorTitle.className = 'bookCardAuthorTitle';
    bookCardAuthorTitle.textContent = 'Author';
  
    const bookCardAuthorContent = document.createElement('div');
    bookCardAuthorContent.className = 'bookCardAuthorContent';
    bookCardAuthorContent.textContent = book.author;
  
    const bookCardPagesTitle = document.createElement('div');
    bookCardPagesTitle.className = 'bookCardPagesTitle';
    bookCardPagesTitle.textContent = 'Pages';
  
    const bookCardPagesContent = document.createElement('div');
    bookCardPagesContent.className = 'bookCardPagesContent';
    bookCardPagesContent.textContent = book.pages;
  
    const bookCardFooter = document.createElement('button');
    bookCardFooter.className = 'bookCardFooter';

    if (book.isRead) {
      bookCardFooter.classList.add('readBookFooter');
      bookCardFooter.textContent = 'Remove from read list';
    } else {
      bookCardFooter.classList.add('notReadBookFooter');
      bookCardFooter.textContent = 'Add to already read list';
    }

    bookCardFooter.addEventListener('click', () => {

      book.isRead = !book.isRead;
      
      bookCardFooter.textContent = book.isRead ? 'Remove from read list' : 'Add to already read list';
      
      if (book.isRead) {
        bookCardHeader.classList.add('readBookHeader');
        bookCardHeader.classList.remove('notReadBookHeader');
        bookCardFooter.classList.add('readBookFooter');
        bookCardFooter.classList.remove('notReadBookFooter');
      } else {
        bookCardHeader.classList.add('notReadBookHeader');
        bookCardHeader.classList.remove('readBookHeader');
        bookCardFooter.classList.add('notReadBookFooter');
        bookCardFooter.classList.remove('readBookFooter');
      }
    });

    bookCard.appendChild(bookCardHeader);
    bookCard.appendChild(bookCardAuthorTitle);
    bookCard.appendChild(bookCardAuthorContent);
    bookCard.appendChild(bookCardPagesTitle);
    bookCard.appendChild(bookCardPagesContent);
    bookCard.appendChild(bookCardFooter);
    container.appendChild(bookCard);
  });
}

// Show default books
addBookToLibrary(myLibrary);

// Checkbox handling
let isRead = false;
const checkbox1 = document.getElementById('checkboxYes');
const checkbox2 = document.getElementById('checkboxNo');

checkbox1.addEventListener('change', () => {
  if (checkbox1.checked) {
    checkbox2.checked = false;
    isRead = true;
  }
});

checkbox2.addEventListener('change', () => {
  if (checkbox2.checked) {
    checkbox1.checked = false;
    isRead = false;
  }
});

// Modal handling
var modal = document.getElementById("modal");
var btn = document.getElementById("addBookBtn");
var span = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

// Handle user input
var bookForm = document.getElementById("bookForm");
bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  if (title.trim() === '' || author.trim() === '' || pages.trim() === '') {
    alert('Please fill in all required fields');
    return; 
  }
  
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook)
  modal.style.display = "none";
  bookForm.reset();

  const arrayLength = myLibrary.length;
  addBookToLibrary(myLibrary.slice(arrayLength-1));
});