'use strict'

function getDogPics() {
  let numOfDogs = $('#quantity').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => alert("Something went wrong, please try again"));
}

function logResponse() {
  let numOfDogs = $('#quantity').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson.message))
    .catch(error => alert("Something went wrong, please try again"));
}

function displayDogs(responseJson) {
    $(".results").append(`<h2>Here's your dogs!</h2>`)
  for (let i = 0; i < responseJson.message.length; i++) {
    $(".results").append(`<img src="${responseJson.message[i]}" class="dogImages">`)
  }
    $(".results").removeClass("hidden");
}



function formListener() {
  $("form").on("submit", function (event) {
    event.preventDefault();
    $(".results").empty();
    let numOfDogs = $('#quantity').val();
    console.log(numOfDogs);
    getDogPics();
    logResponse();
  });
}

function dogImageApp() {
  console.log("App is loaded, awaiting submission!");
  formListener();
}

$(dogImageApp);