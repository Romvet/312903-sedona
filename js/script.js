var clickbutton= document.querySelector(".button-search");
var modalform=document.querySelector(".modal-search");

clickbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-show");
})


