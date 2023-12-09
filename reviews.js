function validateform(){
  
    // Validating email
    let reviewForm = document.getElementById("customerReview");

    reviewForm.addEventListener("submit", (e) => {
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



// Validating phone number

const numberinput = document.getElementById('number');
const numberError = document.getElementById('phoneError');
var x = /[0-9]/
if (!(x.test(numberinput.value))) {
    numberError.textContent = 'Invalid Phone number';
}

else {
    numberError.textContent = '';
}
// Name
const usernameInput = document.getElementById('name');
const usernameError = document.getElementById('nameError');
  if (usernameInput.validity.valueMissing) {
    usernameError.textContent = 'Please enter a first and last name.';
    } 

  else {
      usernameError.textContent = '';
  }


// submit

  if (emailError.textContent == '' & numberError.textContent == '' & usernameError.textContent == '') {
    window.alert('Form has been submitted');
    reviewForm.submit();
    reviewForm.reset();}

  }



