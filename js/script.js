let password = document.getElementById("pass")
let form = document.getElementById("form")
let errorMessage = document.getElementById("error")
let emailInput = document.getElementById('email');
let nameInput = document.querySelector("input[type='text']");




form.addEventListener("submit", (e) => {
  let error = [];
  // name 
  if (((nameInput.value.length) <= 2) || ((nameInput.value.length) > 10)) {
    error.push('Username must be more than 2 characters but less than 10 ');
  }

  if ((password.value.length <= 6) || (password.value.length > 12)) {
    error.push("The password must be at least 6 characters long and maximum of 12 characters")

  }

  if (password.value === "password") {
    error.push("Passwords don't match")
  }

  if (password.value.search(/[A-Z]/) == -1) {
    error.push("Atleast 1 upper letter in password");
  }
  if (password.value.search(/[0-9]/) == -1) {
    error.push("Password must have at least one special character");
  }
  if (password.value.search(/[!\@\#\$\%\^\&\*\(\)\}\{\;\'\:\"\,\.\<\>\/\?}]/) == -1) {
    error.push("Password must have at least one special character")
  }


  if (error.length > 0) {
    e.preventDefault();
    errorMessage.style.display = "block";
    errorMessage.innerText = error.join(" \n ");

  } else {
    // errorElement.innerText = details.join(' \n ')
    errorMessage.innerText = "Successfully Completed";
    alert("Successfully Completed")
  }



  // email 
  emailInput.isValid = () => isValidEmail(emailInput.value);
  let isValidEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
 
});
