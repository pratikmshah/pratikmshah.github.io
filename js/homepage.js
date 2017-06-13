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
  toggleListNav();

  // reposition the social nav on window resize & index page
  $(window).resize(function() {
    socialNavPosition();
    homepageTextPosition();
    toggleListNav();
  });

  /*====================================INDEX TEXT CYCLE
  const COLOR = 'color';
  var words = ['Hello', 'I\'m', 'a', 'developer', 'with', 'knowledge', 'in', 'devicon-html5-plain-wordmark colored', 'devicon-css3-plain-wordmark colored', 'devicon-javascript-plain colored', 'devicon-ruby-plain-wordmark colored', 'devicon-rails-plain-wordmark colored', 'devicon-bootstrap-plain-wordmark colored', 'devicon-sass-original colored', 'and', 'more'],
      wordLength = words.length,
      word = 1;
      $word = $('p.text');

  setInterval(function() {
    if (words[word].indexOf(COLOR) >= 0) {
      $word.html("<p class=\"text text-center " + words[word] + "\">" + "</p>");
    } else {
      $word.html("<p class=\"text text-center\">" + words[word] + "<span>.</span></p>");
    }
    word + 1 == wordLength ? word = 0 : word++;
  }, 1000);
  */
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
