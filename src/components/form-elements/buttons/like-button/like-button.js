$('.like-button__counter').on('click', function(event, count) {
  event.preventDefault();
  
  var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active'),
      multiple = $this.hasClass('multiple-count');
  
  // First method, allows to add custom function
  // Use when you want to do an ajax request
  /* if (multiple) {
  $this.attr('data-count', ++count);
  // Your code here
  } else {
  $this.attr('data-count', active ? --count : ++count).toggleClass('active');
  // Your code here
  } */
  
  // Second method, use when ... I dunno when but it looks cool and that's why it is here
  // $.fn.noop = $.noop;
  // $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
  
});






const btn = document.querySelector('.like-button__btn');

let like = true,
  likeCount = document.querySelector('.like-button__counter').innerHTML;

btn.addEventListener('click', () => {
  likeCount = like ? ++likeCount : --likeCount;
  like = !like;
  document.querySelector('.like-button__counter').innerHTML = likeCount;
});


import $ from 'jquery';
$.each($('.like-button__btn'), function (index, val) {
  if ($(this).find('span').prop('checked') == true) {
    $(this).addClass('active');
  }
});

$(document).on('click', '.like-button__btn', function (event) {

  $(this).toggleClass('active');

});

