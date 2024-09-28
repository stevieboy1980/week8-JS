/*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

//Books



//class books
    //title
    //author
class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}

//class Menu
class Menu{
    constructor(){
        //books array
        this.books=[];
    }

    

    //add books
    //prompt for a title
    //prompt for an author
    //create new book and push book into array
    addBook(){
        let bookTitle = prompt("Enter book title");
        let bookAuthor = prompt("Enter author name")
        this.books.push(new Book(bookTitle, bookAuthor));
    }   

    


    

    
    


    //delete books
    deleteBook(){
        let bookIndex = prompt("Enter book index to DELETE:");
        this.books.splice(bookIndex, 1);

    }

    //view books
    viewBooks(){
        let displayBooks = "";
        for(let i=0; i < this.books.length; i++){
             displayBooks += 
             `${i}) ${this.books[i].title} ${this.books[i].author}`

        }

        alert(`
        Book Inventory:
        --------------------------
        
        ${displayBooks}`);
    }

    //see a menu
showMainMenu(){
    return prompt(`
    Main Menu:
    ----------------------------------
    0) Exit Menu
    1) Add Book
    2) Add Author
    3) Delete Book
    4) View Library
    `);
}
    
//start the menu
start(){
    let selection = this.showMainMenu();

    while(selection != 0){

        switch(selection){

            case "1": this.addBook();
            break;
            
            case "2": this.addAuthor();
            break;

            case "3": this.deleteBook();
            break;

            case "4": this.viewBooks();
            break;

            default: selection = 0;
        }
        selection = this.showMainMenu();
    }
    alert("Exiting Menu... goodbye!");
        
}

}
//Instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();