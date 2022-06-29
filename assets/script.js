var today = moment();
$('#currentDay').text(today.format("dddd, MMM Do YYYY"));

// right now input is stored in local storage, but disappears on refresh.


// var nineAm = 
// var data = JSON.parse(localStorage.getItem("key name"));

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
    var timeValue = $(this).parent().attr('id');  // it only says to save text, but 
                                                  // I'm saving timeValue and inputText as 
                                                  // key, value pair in local storage.
                                                  // timeValue will be in 24 hour time format
    localStorage.setItem(timeValue, JSON.stringify(inputText));

  })

  // need a way to make the text stay on the page after refreshing the browswer or opening a new window:
  $('#9 textarea').val(localStorage.getItem('9'));
  $('#10 textarea').val(localStorage.getItem('10'));
  $('#11 textarea').val(localStorage.getItem('11'));
  $('#12 textarea').val(localStorage.getItem('12'));
  $('#13 textarea').val(localStorage.getItem('13'));  // 13 = 1PM
  $('#14 textarea').val(localStorage.getItem('14'));  // 14 = 2PM
  $('#15 textarea').val(localStorage.getItem('15'));  // 15 = 3PM
  $('#16 textarea').val(localStorage.getItem('16'));  // 16 = 4PM
  $('#17 textarea').val(localStorage.getItem('17'));  // 17 = 5PM