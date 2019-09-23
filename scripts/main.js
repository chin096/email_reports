function main() {

  let emailInput = document.getElementById('email-input');
  let searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', runReport);



  function runReport() {
    if (!checkEmail()) {
      displayEmailErrorMessage();
      return;
    }

    if (isInLocalStorage()) {
      displayResultInfo();
    } else if (isInDataApi()) {
      storeInLocalStorage();
      displayResultInfo();
    }

    // displayEmailNotFound();

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

  // This function will check if any data or the specific email is already in local storage
  function isInLocalStorage() {

    let data = JSON.parse(localStorage.getItem('reports'));
    if (!data) {
      return false;
    }
    if (!data.reports.some(report => report.email === emailInput.value)) {
      return false;
    }
    return true;
  }
  // End of isInLocalStorage function

  // This function will check if the email information is in data.json
  function isInDataApi() {

    loadJSON(function(response){

      let data = JSON.parse(response);
      console.log(data);

    });

  }
  // End of isInDataApi function

  //
  function loadJSON(callback) {
    let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");

    xobj.open('GET', 'https://github.com/chin096/email_reports/blob/master/data/data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };

    xobj.send(null);
  }
  //

}

main();
