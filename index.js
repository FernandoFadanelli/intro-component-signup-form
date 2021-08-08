$(".signup-form").on("submit", function(e) {
  e.preventDefault();
  e.stopPropagation();

  const firstName = $(this).serializeArray()[0].value.trim();
  const lastName = $(this).serializeArray()[1].value.trim();
  const email = $(this).serializeArray()[2].value.trim();
  const password = $(this).serializeArray()[3].value.trim();

  // Remove error class from .input-group
  $(".input-group").removeClass("error");

  // Checking the input
  checkInput(firstName, "first-name");
  checkInput(lastName, "last-name");
  checkInput(email, "email");
  checkInput(password, "password");

});

function checkInput(constant, className) {
  const inputSelector = "." + className;
  const alertSelector = inputSelector + " .alert small";

  if (className === "email") {
    if (constant === "") {
      $(inputSelector).addClass("error");
      $(alertSelector).text("Email cannot be empty");

    } else if (validateEmail(constant)) {
      console.log("Email is valid");

    } else {
      $(inputSelector).addClass("error");
      $(alertSelector).text("Looks like this is not an email");
    }

  } else if (constant === "") {
    $(inputSelector).addClass("error");
  }

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
