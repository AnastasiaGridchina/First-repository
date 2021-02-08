import $ from 'jquery';
$.each($('.checkbox-toggle'), function (index, val) {
  if ($(this).find('input').prop('checked') == true) {
    $(this).addClass('active');
  }
});

$(document).on('click', '.checkbox-toggle', function (event) {
  if ($(this).hasClass('active')) {
    $(this).find('input').prop('checked', false);
  } else {
    $(this).find('input').prop('checked', true);
  }
  $(this).toggleClass('active');

  return false;
});
