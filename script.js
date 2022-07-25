//Object constructor

let myLibrary = [];

function Book(author, title, nrOfPages) {
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

function render(){
let para = document.createElement("div");
para.classList.add("book");
let containerBook = document.getElementById("books-container");
containerBook.appendChild(para);
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