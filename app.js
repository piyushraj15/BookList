// Book class: To represent a book

class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

}

//UI CLASS

class UI{
    static displayBooks(){
        const StoreBooks=[
            {
                title:"Book One",
                author:"Piyush",
                isbn:3223424


            },
            {
                title:"Book One",
                author:"Piyush Raj",
                isbn:3223424


            }

        ];
        const books=StoreBooks;
        books.forEach((book)=>{
            UI.addBookToList(book);
        })
    }
}






