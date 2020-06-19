'use strict'

function getDogPics() {
  let numOfDogs = $('#quantity').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(error => alert("Something went wrong, please try again"))
    displayDogs();
}

function displayDogs() {
  $(".dogImages").replaceWith(`<img src="${responseJson.message}" class="dogImages">`)
  $(".results").removeClass("hidden");
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