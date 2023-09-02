const inputPassword = document.getElementById("input-password");
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener ("click", () => {
    const password = inputPassword.value;
    if(password.length > 7) {
        errorMessage.textContent = "password Valid";
        errorMessage.style.color = "green";
     } else {
        errorMessage.textContent = "password Wrong";
        errorMessage.style.color = "red";
     }
});