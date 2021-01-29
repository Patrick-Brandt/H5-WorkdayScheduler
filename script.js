// This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
function clock() {
    var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(changingTime);
  }
  
  setInterval(clock, 1000);

//To-do: Save function- this function will stand on its own.
  // parse local storage
//localStorage.setItem ("key","value");
  // for the code above maybe a timeblock name for the key, and value will be text from the text area?
 //var saveText = $(".saveBtn");

 //Do I create vars with strings that contain the text entered in text area? 

// This worked, but I only did it for the 11AM block, by giving the save button id="save11".
$("#save11").on("click", function() {
  alert("I've been saved!");
});

  
//Inside this function will be the color change function, using the preset classes provided.  
$(document).ready(function() {
  console.log ("ready");
});

//if time block < moments.js then apply .past
// if time block  = moments .js apply .present
// else if time block > moments .js, apply .future