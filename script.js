var today = moment();
$('#currentDay').text(today.format("dddd, MMM Do YYYY"));

// need to check whether each timeblock is past, present or future and change color
// past = gray, present = red, future = green
function currentTime() {
    var currentTime = moment().hours()
    var timeBlock = $('.time-block');

    //  console.log(current);

    timeBlock.each(function () {
      var hour = parseInt($(this).attr('id'))

    //  console.log(hour);

      if (hour === currentTime) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
    //    console.log(('present' + hour + current))
      } 
      else if (currentTime > hour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
    //    console.log(('past' + hour + current))
      } 
      else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
    //    console.log(('future' + hour + current))
      }
    })
  }

  currentTime()

  //Set up local storage to store persistent changes in events by timeblock

  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })

  $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
  $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
  $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
  $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
  $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
  $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
  $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
  $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
  $('#17 textarea').val(localStorage.getItem('17').replace(/['"]+/g, ''));
//  console.log(parent);

  //Use styling to transform pointer into a disk icon at the time of click event (saving of event)

  button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })
