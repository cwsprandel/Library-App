let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    renderBooks();
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBooks();
}

function renderBooks() {
    const bookArea = document.getElementById("bookArea");
    bookArea.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "bookCard");
        bookCard.setAttribute("id", "card" + i);
        const bookTitle = document.createElement("h4");
        bookTitle.textContent = myLibrary[i].title;
        const bookAuthor = document.createElement("h5");
        bookAuthor.textContent = "by: " + myLibrary[i].author;
        const bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " pages";
        const bookRead = document.createElement("p");
        bookRead.textContent = myLibrary[i].read;
        let readToggle = document.createElement("button");
        readToggle.textContent = "Toggle Read Status";
        readToggle.setAttribute("class", "readBtn");
        readToggle.onclick = function() {
            toggleRead(i);
        }

        let bookDelete = document.createElement("button");
        bookDelete.textContent = "Remove Book";
        bookDelete.setAttribute("class", "removeBtn");
        bookDelete.onclick = function (){
            removeBook(i)
        }

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(readToggle);
        bookCard.appendChild(bookDelete);

        bookArea.appendChild(bookCard);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

const newBookButton = document.getElementById("add_book_btn");
newBookButton.addEventListener("click", function(){
    newBookForm.style.display = "grid";
});

const newBookForm = document.getElementById("add_book_form");
newBookForm.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
});

