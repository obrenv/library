//Object constructor

let myLibrary = [];

function Book(author, title, pages) {
    this.author = author,
    this.title = title,
    this.nrOfPages = pages
  }




//get form data
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");

let submit = document.getElementById("submitbtn");


function addBook(){
  let book = new Book(author.value, title.value, pages.value);
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


counter ++;
}

}

}


function button(){
  addBook(); 
  render();
}


submit.onclick = button;
/*
submit.onclick = addBook; with parenthesses was calling function on load, causing problems

If you don't specify button type as "button", it will reload the page on press (be considered "submit")

*/