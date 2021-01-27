// This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
function clock() {
    var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(changingTime);
  }
  
  setInterval(clock, 1000);


