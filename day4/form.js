const sbmit_btn = document.getElementById("submit_btn");
const name_inp = document.getElementById("name_input");
const age_inp = document.getElementById("age_input");
// const gender_inp = document.getElementByName("gender");

function printResults() {
  const formResults = document.getElementById("results");
  let NAME = name_inp.value;
  let AGE = age_inp.value;
  let GENDER = document.querySelector('input[type="radio"]:checked').value;
  var ADULT;
  var VOTE;

  if (AGE >= 18) {
    ADULT = "Yes";
    VOTE = "Yes";
  } else {
    ADULT = "No";
    VOTE = "No";
  }

  formResults.querySelector("#name").innerHTML = "Name: " + NAME;
  formResults.querySelector("#age").innerHTML = "Age: " + AGE;
  formResults.querySelector("#gender").innerHTML = "Gender: " + GENDER;
  formResults.querySelector("#adult").innerHTML = "Is Adult: " + ADULT;
  formResults.querySelector("#vote").innerHTML = "Eligible to Vote: " + VOTE;
}

sbmit_btn.addEventListener("click", printResults);
