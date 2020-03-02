// Book class: To represent a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

//UI CLASS

class UI {
    static displayBooks() {
        const StoreBooks = [
            {
                title: "Book One",
                author: "Piyush",
                isbn: 3223424


            },
            {
                title: "Book One",
                author: "Piyush Raj",
                isbn: 3223424


            }

        ];
        const books = StoreBooks;
        books.forEach((book) => {
            UI.addBookToList(book);
        });

    }
    static addBookToList(book) {
        const list = document.querySelector("#book-list")
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="btn btn-danger btn-small delete">X</a></td>`;

        list.appendChild(row)
    }
    //delete item
    static deleteItem(el){
        if(el.classList.contains('delete')){
            el.parentElement.remove();
        }


    }
    //clear field
    static clearField(){
        document.getElementById("title").value=''
        document.getElementById("author").value=''
        document.getElementById("isbn").value=''

    }
    

}

//Display Book on load
document.addEventListener('DOMContentLoaded', UI.displayBooks)


//Add a book to the App

document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const target = document.getElementById("title").value
    const author = document.getElementById("author").value
    const isbn = document.getElementById("isbn").value
    const newBook = new Book(target, author, isbn)
    UI.addBookToList(newBook);
    //clear field

    UI.clearField();

})

document.getElementById('book-list').addEventListener('click',(e)=>UI.deleteItem(e.target))







