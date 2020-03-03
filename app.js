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
        // const StoreBooks = [
        //     {
        //         title: "Book One",
        //         author: "Piyush",
        //         isbn: 3223424


        //     },
        //     {
        //         title: "Book One",
        //         author: "Piyush Raj",
        //         isbn: 3223424


        //     }

        // ];
        const StoreBooks=Store.getBooks()
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
            el.parentElement.parentElement.remove();
        }


    }
    //clear field
    static clearField(){
        document.getElementById("title").value=''
        document.getElementById("author").value=''
        document.getElementById("isbn").value=''

    }
    static showAlert(message,className){
         const div=document.createElement('div');
         div.className=`alert alert-${className}`;
         div.appendChild(document.createTextNode(message));
         const container=document.querySelector('.container');
         const form=document.querySelector('#book-form');
         container.insertBefore(div,form)

         //Remove alert message
         setTimeout(()=> document.querySelector(".alert").remove(),1000)
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
    if(title==="" || author==="" || isbn===""){
        // alert("Please fill all entery")
        UI.showAlert("Please fill in all field",'danger')
    }
    else{
        const newBook = new Book(target, author, isbn)
        UI.addBookToList(newBook);
        //add book to localstorage
        Store.addBook(newBook)
        //success message
        UI.showAlert("Book Added","success")
        //clear field


        UI.clearField();
    }
    

})

document.getElementById('book-list').addEventListener('click',(e)=>{UI.deleteItem(e.target)
//remove from local
Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
})

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books
    }
    static addBook(book){
        const books=Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removeBook(){
        const books=Store.getBooks();

        books.forEach((book,index)=>{
            if(book.isbn===isbn){
                books.splice(index,1)
            }
        });
        localStorage.setItem('books',JSON.stringify(books))
    }
}




