// This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
function clock() {
    var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(changingTime);
  }
  
  setInterval(clock, 1000);

//To-do: Save function- this function will stand on its own.
  // parse local storage


//Inside this function will be the color change function, using the preset classes provided.  
$(document).ready(function() {
  console.log ("ready");
});
