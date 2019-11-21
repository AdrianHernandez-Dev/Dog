'use strict';

function getDogImage(dog) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dog}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('#dogs').on('submit', function(event) {
    event.preventDefault();
    let dog = $('input#number').val()
    console.log(dog);
    getDogImage(dog);
  });
}
function displayResults(responseJson) {
  console.log(responseJson);
  for(let i=0; i < responseJson.message.length; i++){
  console.log(i)
  $('.hidden').append(
  `<img src="${responseJson.message[i]}" class="results-img">`
  )
  }
  $('.hidden').removeClass('hidden');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

