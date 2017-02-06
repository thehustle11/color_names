
$(document).ready(function() {

  $('.box').click(function(e) {
    $(this).toggleClass('test','size');
    $('.inner-text').toggleClass('size');  // toggle text size
    $('.body').toggleClass('bodyh'); // hiding scroll bar
    e.preventDefault();
  });

  $('.work').click(function() {
    var data = $(this).text();
    // alert(data); // getting selected color name
  })

});
