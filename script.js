//Object constructor

let myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author,
    this.title = title,
    this.nrOfPages = pages,
    this.bookStatus = status
  }

  Book.prototype.toggleReaded = function () {
          if (this.bookStatus==="READ"){
        this.bookStatus="NOT READ";
      }
      else{
        this.bookStatus="READ";
      }

      
    };





//get form data
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let bookStatus = document.getElementById("bookstatus");
let submit = document.getElementById("submitbtn");


function addBook(){
  let book = new Book(author.value, title.value, pages.value, bookStatus.options[bookStatus.selectedIndex].value);
  myLibrary.push(book);
  modal.style.display = "none";
  
  console.log("wut")
  
}




//Modal


let modal = document.getElementsByClassName("modalBck") [0];
let dugmic = document.getElementById("dugme");
let close = document.getElementsByClassName("close") [0];

  dugmic.onclick = function() {
    modal.style.display = "block";

  }

close.onclick = function(){
  modal.style.display = "none";
}


//render books on page



let counter = 0;

function render(){

  for (let i = 0; i <= myLibrary.length - 1; i++) {
    
if(counter <= i){

let bookBox = document.createElement("div");
bookBox.classList.add("book");
let containerBook = document.getElementById("books-container");
containerBook.appendChild(bookBox);


let author = document.createElement("p");
author.textContent = myLibrary[i].author;
bookBox.appendChild(author);

let line = document.createElement("hr");
bookBox.appendChild(line);

let title = document.createElement("p");
title.textContent = myLibrary[i].title;
bookBox.appendChild(title);

let line2 = document.createElement("hr");
bookBox.appendChild(line2);

let pages = document.createElement("p");
pages.textContent = myLibrary[i].nrOfPages;
bookBox.appendChild(pages);




let buttonBox = document.createElement("div");
buttonBox.classList.add("onBookButtonsContainer");
bookBox.appendChild(buttonBox);

let deleteButton = document.createElement("button");
deleteButton.textContent = "DELETE";
deleteButton.classList.add("onBookButtons");
deleteButton.classList.add("dellButt");
buttonBox.appendChild(deleteButton);

deleteButton.onclick = function(){
  console.log(i);
  myLibrary.splice(i, 1);
  this.parentElement.parentElement.remove();
  counter --;
}




let readButton = document.createElement("button");


readButton.textContent = myLibrary[i].bookStatus;
readButton.classList.add("onBookButtons");
buttonBox.appendChild(readButton);

readButton.onclick = function(){

  myLibrary[i].toggleReaded();
  readButton.textContent = myLibrary[i].bookStatus;
  console.log("pl")
};

counter ++;



let div = document.getElementsByClassName("book")[i];
div.dataset.index = i;

}

}

}


function button(){
  addBook(); 
  render();
  document.getElementById("formAdd").reset();
}


submit.onclick = button;


/*
submit.onclick = addBook; with parenthesses was calling function on load, causing problems

If you don't specify button type as "button", it will reload the page on press (be considered "submit")
it seems this can also be fixed with "prevent default" method


To remove text from form (when we want to submit next book) we can use .reset() method 
document.getElementById("formAdd").reset();
*/