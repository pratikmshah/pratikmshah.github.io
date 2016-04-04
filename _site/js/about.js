$(function(){
  $(".tab-btns").on('click', 'a', function(e){
    // grab item clicked on
    var $this = $(this);

    // swap classes and display content
    swapClass($this.attr('href'), $this);

    e.preventDefault();
  });
});

function swapClass(clickedTabLink, clickedTab) {

  // store values for later use in conditionals and add/remove classes
  var story = $('.tab-btns li:first-child a').attr('href');
  var $longs = $('#long');
  var $shorts = $('#short');
  var $tabButtons = $(".tab-btns");

  // if short story was clicked add class show to short and add hide to long
  // else reverse the above
  // also add an show tab
  if(clickedTabLink === story) {

    // change the tabs
    $tabButtons.find("li a.active").removeClass('active');
    clickedTab.addClass('active')

    // change the content
    $longs.fadeOut('fast', function() {
      $longs.removeClass('show').addClass('hide');
      $shorts.addClass('show').removeClass('hide');
    }).fadeIn();
  } else {

    // change the tabs
    $tabButtons.find("li a.active").removeClass('active');
    clickedTab.addClass('active')

    // change the content
    $shorts.fadeOut('fast', function() {
      $shorts.addClass('hide').removeClass('show');
      $longs.removeClass('hide').addClass('show');
    }).fadeIn();
  }
}