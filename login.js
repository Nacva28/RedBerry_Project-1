function login() {
  const allowedEmail = "gigagiorgadze@redberry.ge";
  const enteredEmail = document.getElementById("email").value;
  const errorMessageElement = document.getElementById("errorMessage");

  if (enteredEmail === allowedEmail) {
   
    window.location.href = `index.html?loginSuccess=true`;
  } else {
    errorMessageElement.textContent = "Invalid email. Please try again.";
    document.getElementById("email").style.borderColor = "red";
  }
}
