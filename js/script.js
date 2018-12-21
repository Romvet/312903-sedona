var clickbutton= document.querySelector(".button-search");
var modalform=document.querySelector(".modal-search");
var checkin=modalform.querySelector("[name=data-check-in]");




clickbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-show");
  })


