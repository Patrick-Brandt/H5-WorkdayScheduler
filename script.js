// This function prevents any jQuery code from running until the html document is finished loading.  
$(document).ready(function() {
  console.log ("ready");
     
  // This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
  function clock() {
      var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#currentDay').html(changingTime);
    }
    
    setInterval(clock, 1000);
    
     //Inside this function will be the color change function, using the preset classes provided.

    //if time block < moments.js then 
    // $("textarea").addClass("past");
    // else if time block  = moments .js then
    // $("textarea").addClass("present");
    // else if time block > moments .js, then
    // $("textarea").addClass("future");
    

    //To-do: Save function- this function will stand on its own.
      // parse local storage
    //localStorage.setItem ("key","value");
      // for the code above maybe a timeblock name for the key, and value will be text from the text area?
    //var saveText = $(".saveBtn");

    //Do I create vars with strings that contain the text entered in text area? 
    //Event objects will help me find out where things are occuring.
    $("#9AM").on("click", function(event) {
      console.log(event.currentTarget);
  });

}); 


  