var momentsBlock = moment().format("H");

// This function prevents any jQuery code from running until the html document is finished loading.  
$(document).ready(function() {
  console.log ("ready");

  // This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
  function clock() {
      var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#currentDay').html(changingTime);
    }
    
    setInterval(clock, 1000);
    render();
  });

    // This will loop through my time blocks.
    $(".time-block").each(function() {
      //console.log(this.id);
      var currentHourBlock = parseInt($(this).attr("hour"))
      //console.log("hour:", currentHourBlock);
      
      if (momentsBlock >= 1 && momentsBlock <= 5) {
        momentsBlock += 12; 
      }
      //console.log(momentsBlock, currentHourBlock);

      //Conditional statement below changes classes on textarea depending on current time.
      if (momentsBlock > currentHourBlock) { 
        $(this).addClass("past");
        } else if (momentsBlock == currentHourBlock) {
        $(this).addClass("present");
        } else if (momentsBlock < currentHourBlock) {
        $(this).addClass("future");
      };
    })

    
    /*To-do: Save function- this function will stand on its own.
    
    localStorage.setItem ("key","value");
       for the code above maybe a timeblock name for the key, and value will be text from the text area?*/

      $(".saveBtn").click(function () {
        var saveText = $(this).siblings(".description").val();
        alert(saveText);
        var hourClass = $(this).siblings(".hour").text();
        localStorage.setItem(hourClass, JSON.stringify(saveText));
        //there is a way to do this using 'this' to target each individual timeblock
      });
      
      //render to screen-regular js function render. put inside of doc ready, but call it down here. look to quiz 
        function render (){
          
        }
  
; 


  