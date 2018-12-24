var clickbutton= document.querySelector(".button-search");
var modalform=document.querySelector(".modal-search");
var form=modalform.querySelector("form");


var checkin=modalform.querySelector("[name=date-check-in]");
var checkout=modalform.querySelector("[name=date-check-out]");
var numberpeople=modalform.querySelector("[name=number-people]");
var numberchild=modalform.querySelector("[name=number-child]");

 modalform.classList.add("modal-hid");

clickbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-hid");
   modalform.classList.toggle("modal-show");
    checkin.focus();
   })



