// Validate password
function validateAcc(){
    let loginForm = document.getElementById("signupForm");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();}
    )
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (emailInput.validity.valueMissing) {
      emailError.textContent = 'Please enter an email address.';
    }
    else if(!emailInput.value.includes('@') || !/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
      } 
      else {
        emailError.textContent = '';
      }
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
if (passwordInput.validity.valueMissing) {
  passwordError.textContent = 'Please enter a password.';
} 
else if (passwordInput.validity.tooShort) {
  passwordError.textContent = 'Password must be at least 8 characters.';
} 
else {
  passwordError.textContent = '';
}

// Validate the passwords match

const passwordInput2 = document.getElementById('password-repeat');
const passwordError2 = document.getElementById('confirmpassError');
if (passwordInput.value == passwordInput2.value) {
    passwordError2.textContent = '';
}
else {
    passwordError2.textContent = 'Passwords do not match';
}
// Username
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');
if (usernameInput.validity.valueMissing) {
      usernameError.textContent = 'Please enter a username.';
    } 
else if (usernameInput.validity.tooShort || usernameInput.validity.tooLong) {
      usernameError.textContent = 'Username must be between 8 and 20 characters.';
    } 
else {
      usernameError.textContent = '';
    }

    if(emailError.textContent == '' & passwordError.textContent == '' & passwordError2.textContent == '' & usernameError.textContent == ''){
      window.alert('Account has been created');
      loginForm.submit();
      loginForm.reset();
      window.close();}
}
