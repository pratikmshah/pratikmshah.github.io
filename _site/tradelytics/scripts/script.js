$(document).ready(function() {

  // 1 button to load favorite links in tabs
	$("a.exec").on("click", function(e) {
	    e.preventDefault();
	    var links = ['http://finviz.com/', 'https://stocktwits.com/home']

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

});
