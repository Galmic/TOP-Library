var modal = document.getElementById("myModal");
var addBook = document.getElementById("addBookbtn");
var clearBook = document.getElementById("clearBookbtn");
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementById("submit");

addBook.onclick = function () {
  modal.style.display = "block";
};
clearBook.onclick = function () {
  clearLibrary();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

submit.onclick = function () {
  addBookArray();
  modal.style.display = "none";
};
