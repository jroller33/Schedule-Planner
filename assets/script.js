var today = moment();
$('#currentDay').text(today.format("dddd, MMM Do YYYY"));

// need to check whether each timeblock is past, present or future and change color
// past = gray, present = red, future = green. These are already created in CSS.

function currentTime() {
    var currentTime = moment().hours()
    var timeBlock = $('.time-block');

    timeBlock.each(function () {
      var hour = parseInt($(this).attr('id'))

      if (hour === currentTime) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
      } 

      else if (currentTime > hour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
      }

      else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
      }
    })
  }
  currentTime()

  // this is for the save buttons. Saves input to local storage in browser.
  var button = $(":button");
  button.on('click', function (event) {     // click event listener
    event.preventDefault();

    // console.log($(this).siblings('.col-sm-10').val());
    // console.log($(this).parent().attr('id'));

    var inputText = $(this).siblings('.col-sm-10').val();
    var timeValue = $(this).parent().attr('id');  // it says to save text, but I'm saving timeValue and inputText as key, value pair in local storage.
    localStorage.setItem(timeValue, JSON.stringify(inputText));       // timeValue will be in 24 hour time format

  })