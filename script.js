var currentHourBlock = moment().hours(); 
var timeBlock = //this needs to be the value of the "hour" attribute, I think.

// This function prevents any jQuery code from running until the html document is finished loading.  
$(document).ready(function() {
  console.log ("ready");

  // This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
  function clock() {
      var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#currentDay').html(changingTime);
    }
    
    setInterval(clock, 1000);

    // This will loop through my time blocks.
    $(".time-block").each(function() {
      console.log(this);
      var currentHourBlock = parseInt($(this).attr("hour"))
      console.log("hour:", currentHourBlock);
  
    })

      //This function changes the color of the text area, using the "past, "present", and "future" css classes.
      //Need to fix time-block
      function colorChange() {
      if ("time-block" < currentHourBlock) { 
        $("textarea").addClass("past");
        } else if ("time-block" === currentHourBlock) {
        $("textarea").addClass("present");
        } else if ("time-block" > currentHourBlock) {
        $("textarea").addClass("future");
        };
      }
    

    /*To-do: Save function- this function will stand on its own.
    
    localStorage.setItem ("key","value");
       for the code above maybe a timeblock name for the key, and value will be text from the text area?
    var saveText = $(".saveBtn");*/

    /*Do I create vars with strings that contain the text entered in text area? 
      Event objects will help me find out where things are occuring.*/
    $("#9AM").on("click", function(event) {
      console.log(event.currentTarget);
  });

}); 


  