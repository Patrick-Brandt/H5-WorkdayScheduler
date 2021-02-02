var momentsBlock = moment().hours(); 
var timeBlock =" ";//this needs to be the value of the "hour" attribute, I think.
var saveText = $(".saveBtn");
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
      console.log(this.id);
      var currentHourBlock = parseInt($(this).attr("hour"))
      console.log("hour:", currentHourBlock);
      //add conditional that adds 12 to any time between 1 and 5.
      if (momentsBlock >= 1 && momentsBlock <= 5) {
        momentsBlock += 12;
      }

      if (momentsBlock < currentHourBlock) { 
        $("textarea").addClass("past");
        } else if (momentsBlock === currentHourBlock) {
        $("textarea").addClass("present");
        } else if (momentsBlock > currentHourBlock) {
        $("textarea").addClass("future");
        };
  
    })

      //This function changes the color of the text area, using the "past, "present", and "future" css classes.
      //Need to fix time-block
      /*function colorChange() {
      I had a conditional statement here, but moved it inside of my loop. Will keep the function colorChange here until I am certain that was the right move.
      }*/
    

    /*To-do: Save function- this function will stand on its own.
    
    localStorage.setItem ("key","value");
       for the code above maybe a timeblock name for the key, and value will be text from the text area?*/
    var saveText = $(".saveBtn");

      //Event objects will help me find out where things are occuring.*/
    $("#9AM").on("click", function(event) {
      console.log(event.currentTarget);
  });

}); 


  