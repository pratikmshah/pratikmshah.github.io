$(function() {

  //====================================HOMEPAGE NAME
  $("#hero-container .texts p span.t1").animate({ opacity: 1 }, 3000, "linear");
  $("#hero-container .texts p span.t2").delay(750)
                                       .animate({ opacity: 1 }, 3000, "linear");



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
  //socialNavPosition();
  homepageTextPosition();
  toggleListNav();

  // reposition the social nav on window resize & index page
  $(window).resize(function() {
    //socialNavPosition();
    homepageTextPosition();
    toggleListNav();
  });

  //====================================SCROLL UP BUTTON
  $(document).scroll(function() {
    if($(document).scrollTop() > 100) {
      $("button#scroll-top").css("display", "block");
    } else {
      $("button#scroll-top").css("display", "none");
    }
  });

  $("#scroll-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });


  //====================================BLOG HOME BACKGROUND
  if($("div.page-content")) {
    $("body").css('background-color', "#F4F4F4");
  }

});



//====================================HELPER FUNCTIONS
function socialNavPosition() {
  var pos = $('#title').position();
  $('#social-nav').css('left', (pos.left - 70));
}

function homepageTextPosition() {
  var pos = $(window).height() - $(".wrapper").height() - $("footer").height() - 15;
  $('#hero-container').css('height', pos)
  $('.blog').css('height', pos);
  $('#about').css('height', pos);
}

function toggleListNav() {
  return $(window).width() <= 600 ? $('ul.trigger').removeClass('list-inline') :
                                    $('ul.trigger').addClass('list-inline');

}
