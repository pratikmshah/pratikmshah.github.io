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
    swapTabs($tabButtons);

    // change the content
    $.when($longs.slideUp(1000, function() {
      $longs.removeClass('show').addClass('hide');
      $shorts.addClass('show').removeClass('hide');
    })).then($shorts.slideDown('slow'));

  } else {

    // change the tabs
    swapTabs($tabButtons)

    // change the content
    $.when($shorts.slideUp(1000, function() {
      $shorts.addClass('hide').removeClass('show');
      $longs.removeClass('hide').addClass('show');
    })).then($longs.slideDown('slow'));
  }
}

// swap current tab class from active to inactive
function swapTabs(tabButtons) {
  tabButtons.find("li a.active").removeClass('active');
  clickedTab.addClass('active');
}