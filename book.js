let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
let checkInputs = true;
const form = document.getElementById("book_form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookArray() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;

  if (read === false) {
    read = "Not Yet";
  } else {
    read = "Yes";
  }

  const addNewBook = new Book(title, author, pages, read);
  const toArray = Object.values(addNewBook);
  if (title === "" || author === "" || pages === "") {
    alert("Book Title, Author & Pages are Required!");
  } else {
    myLibrary.push(toArray);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    console.log(myLibrary.length);
  }

  //if (localStorage.getItem("myLibrary")) {
  //console.log(myLibrary);
  //alert("Successfully Added to the Library");
  //} else {
  // alert("Error occured.");
  //}
}

function clearLibrary() {
  localStorage.clear();
  if (localStorage.getItem("myLibrary")) {
    alert("The key still exists in localStorage.");
  } else {
    console.log(myLibrary);
    location.reload();
  }
}
