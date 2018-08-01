$(document).ready(function() {

  // 1 button to load favorite links in tabs
	$("a.exec").on("click", function(e) {
	    e.preventDefault();
	    var links = ['http://finviz.com/', 'https://stocktwits.com/home', 'https://seekingalpha.com/',
									 'http://pratikmshah.github.io/tradelytics/apps/snowball/snowball.html', 'https://www.tdameritrade.com/home.page']

	    for (var i = 0; i < links.length; i++) {
	    	window.open(links[i]);
	    };
	});

  // search button
  $("#stock-search").on("click", function(e) {
      e.preventDefault();
      // variables
      var ticker = $("#ticker").val();
      var FINVIZ_LINK = "https://finviz.com/quote.ashx?t=";

      window.open(FINVIZ_LINK + ticker);

      $("#ticker").val('');
  });

	// scroll up button
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

});
