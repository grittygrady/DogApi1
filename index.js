'use strict'

function getDogPics() {
  let numOfDogs = $('#quantity').val();
  fetch("https://dog.ceo/api/breed/hound/images/random/")
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function formListener() {
  $("form").on("submit", function(event){
    event.preventDefault();
    let numOfDogs = $('#quantity').val();
    console.log(numOfDogs);
    getDogPics();
  });
}

function dogImageApp() {
  console.log("App is loaded, awaiting submission!");
  formListener();
}

$(dogImageApp);