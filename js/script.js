var clickbutton = document.querySelector(".button-search");
var modalform = document.querySelector(".modal-search");
var form = modalform.querySelector("form");
var checkin = modalform.querySelector("[name=date-check-in]");
var checkout = modalform.querySelector("[name=date-check-out]");
var numberpeople = modalform.querySelector("[name=number-people]");
var numberchild = modalform.querySelector("[name=number-child]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("checkin");
} catch (err) {
  isStorageSupport = false;
}

modalform.classList.add("modal-hid");

clickbutton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-hid");
  modalform.classList.toggle("modal-show");
  if (storage) {
    checkin.value = storage;
    checkout.focus();
  } else {
    checkin.focus();
  }
});

form.addEventListener("submit", function(evt) {
  if (
    !checkin.value ||
    !checkout.value ||
    !numberpeople.value ||
    !numberchild.value
  ) {
    evt.preventDefault();
    console.log("Заполните пустые поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("checkin", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalform.classList.contains("modal-show")) {
      evt.preventDefault();
      modalform.classList.remove("modal-show");
    }
  }
});
