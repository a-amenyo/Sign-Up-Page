let password = document.getElementById("pass")
let form = document.getElementById("form")
let errorMessage = document.getElementById("error")


form.addEventListener("submit", (e) => {
    let error = [];

  
    if (password.value.length <= 6) {
        error.push("Invalid Password")
      
    }
  
    if (password.value.length > 12) {
        error.push("Invalid Password")
    }
  
    if (password.value === "password") {
        error.push("Passwords don't match")
    }
   
    if (password.value.search(/[A-Z]/) == -1){
      error.push("Atleast 1 upper letter in password");
    }
    if (password.value.search(/[0-9]/) == -1){
      error.push("Atleast 1 number in password");
    }
    if (password.value.search(/[!\@\#\$\%\^\&\*\(\)\}\{\;\'\:\"\,\.\<\>\/\?}]/) == -1){
        error.push("passeord must have at least one special character")
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
  });
  