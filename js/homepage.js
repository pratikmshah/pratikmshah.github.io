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


  //====================================SOCIAL-NAV & INDEX PAGE CONTENT

  // run once page loads
  socialNavPosition();
  homepageTextPosition();

  // reposition the social nav on window resize & index page
  $(window).resize(function() {
    socialNavPosition();
    homepageTextPosition();
  });

});

function socialNavPosition() {
  var pos = $('#title').position();
  $('#social-nav').css('left', (pos.left - 70));
}

function homepageTextPosition() {
  var pos = $(window).height() - $(".wrapper").height() - $("footer").height();
  $('#hero-container').css('height', pos);
}
