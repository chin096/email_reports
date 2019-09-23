function main() {

  let emailInput = document.getElementById('email-input');
  let searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', runReport);



  function runReport() {
    if (!checkEmail()) {
      displayEmailErrorMessage();
      return;
    }

    

  }


  // This function will return false if the email input value is not valid
  function checkEmail() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!emailInput.value.match(mailFormat)) {
      return false;
    }
    return true;
  }
  // End of checkEmail function

  // This function will display an error message to the user
  function displayEmailErrorMessage() {

    emailInput.value = "";
    emailInput.placeholder = "Please add a valid email address";
    emailInput.classList.add("error");

  }
  // End of showErrorMessage function

}

main();
