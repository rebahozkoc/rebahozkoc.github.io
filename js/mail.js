// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// add event to form submit button
formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log(formInputs[0].value);
  window.open(
    `mailto:contact@rebahozkoc.com?subject=${formInputs[1].value} from ${formInputs[0].value}&body=${formInputs[2].value}`
  );
});