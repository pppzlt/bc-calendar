
$(function () {

  $('button').click(function (e) {
    let ihour = $(this).parent().attr('id');

    let content = $(this).siblings('textarea').val().trim();

    localStorage.setItem(ihour, content);
  })

  var today = dayjs();
  var nowhour = Number(today.format('H'));

  //create a function to apply different class to diffrent blocks;
  $('.time-block').each(function () {
    let ihour = Number($(this).attr('id').slice(5));
    if (ihour < nowhour) {
      $(this).addClass('past');
    } else if (ihour == nowhour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future')
    }

    let hour = $(this).attr('id')
    if (localStorage.getItem(hour) != null) {
      $(this).children('textarea').val(localStorage.getItem(hour))
    }

  })

  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
});
