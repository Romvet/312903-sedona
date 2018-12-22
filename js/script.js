var clickbutton= document.querySelector(".button-search");
var modalform=document.querySelector(".modal-search");
var checkin=modalform.querySelector("[name=date-check-in]");
var form=modalform.querySelector("form");
var checkout=modalform.querySelector("[name=date-check-out]");
var numberpeople=modalform.querySelector("[name=number-people]");
var numberchild=modalform.querySelector("[name=number-child]");

clickbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-show");
  checkin.focus();
   })
/*
  form.addEventListener("submit", function (evt) {
    if(!checkin.value || !checkout.value || !numberpeople.value || !numberchild.value){
    evt.preventDefault();
    modalform.classList.add("modal-error");
  }
  });*/

