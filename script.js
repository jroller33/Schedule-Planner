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

  // this is for the save buttons. Saves to local storage in browser.
  var button = $(":button");
  button.on('click', function (event) {
    event.preventDefault();

    // console.log($(this).siblings('.col-sm-10').val());
    // console.log($(this).parent().attr('id'));

    var inputText = $(this).siblings('.col-sm-10').val();
    var timeValue = $(this).parent().attr('id');  // it says to save text, but I'm saving timeValue and inputText as (key, value) pair in local storage.
    localStorage.setItem(timeValue, JSON.stringify(inputText));

  })

//   $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
//   $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
//   $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
//   $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
//   $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
//   $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
//   $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
//   $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
//   $('#17 textarea').val(localStorage.getItem('17').replace(/['"]+/g, ''));
// //  console.log(parent);

  //Use styling to transform pointer into a disk icon at the time of click event (saving of event)

  // button.on('click', function (event) {
  //   $('selector').css('cursor', 'i')
  // })
