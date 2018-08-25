$(function(){
  // call nextImage over and over every 3.5 seconds
  var slides = ['nextImage("#prism-slide")', 'nextImage("#yeeld-slide")', 'nextImage("#tradelytics-slide")',
                'nextImage("#snowball-slide")', 'nextImage("#numbers-slide")'];

  for (var i = 0; i < slides.length; i++) {
    setInterval(slides[i], 3000);
  }

});

function nextImage(id) {
  var cur = $(id + ' img.show-img');  // get current image
  var nxt = cur.next();               // get next image
  if (nxt.length == 0) {
    nxt = $(id + ' img:first');      // reset and get the first img
  }

  cur.removeClass('show-img').addClass('hide-img'); // remove showing the img and hide the img
  nxt.css('opacity', '0.0').removeClass('hide-img')
                           .addClass('show-img')
                           .animate( { 'opacity': 1.0 }, 1000);

}
