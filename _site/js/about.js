$(function(){
  $(".tab-btns").on('click', 'a', function(e){

    // grab item clicked on
    var $active = $(this);

    // swap classes and display content
    swapClass($active.attr('href'));

    e.preventDefault();
  });
});

function swapClass(clickedClass) {

  // store href value to use for conditional step
  var story = $('.tab-btns li:first-child a').attr('href');

  // if short story was clicked add class active to short
  // else add inactive class to short and active to long
  if(clickedClass === story) {
    $('#short').removeClass('inactive').addClass('active');
    $('#long').removeClass('active').addClass('inactive');
  } else {
    $('#long').removeClass('inactive').addClass('active');
    $('#short').removeClass('active').addClass('inactive');
  }
}