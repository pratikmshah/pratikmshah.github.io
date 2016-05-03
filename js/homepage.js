$(function() {

  //====================================MASONRY
  // setup specs for masonry
  $('div.page-content').imagesLoaded( function() {
    $("div.grid-container").masonry({
      isFitWidth: true,
      columnWidth: 'div.block',
      itemSelector: 'div.block'
    });
  });


  //====================================SOCIAL-NAV

  socialNavPosition();  // run once page loads

  // reposition the social nav on window resize
  $(window).resize(function() {
    socialNavPosition();
  });

});

function socialNavPosition() {
  var pos = $('#title').position();
  $('#social-nav').css('left', (pos.left - 100));
}