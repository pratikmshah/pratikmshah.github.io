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
      var YHOO_LINK = "https://finance.yahoo.com/chart/";
      var YHOO_PARAMS = "#eyJzaG93QXJlYSI6ZmFsc2UsInNob3dMaW5lIjpmYWxzZSwibXVsdGlDb2xvckxpbmUiOmZhbHNlLCJzaG93Q2FuZGxlIjp0cnVlLCJib2xsaW5nZXJVcHBlckNvbG9yIjoiI2UyMDA4MSIsImJvbGxpbmdlckxvd2VyQ29sb3IiOiIjOTU1MmZmIiwic2hvd0VtYSI6dHJ1ZSwiZW1hQ29sb3JzIjoiI2YwMTI2ZiwjMWE5YWY5LCMxYWM1NjciLCJlbWFQZXJpb2RzIjoiNTAsMjAsMTAiLCJlbWFXaWR0aHMiOiIyLDEsMSIsImVtYUdob3N0aW5nIjoiMCwwLDAiLCJtZmlMaW5lQ29sb3IiOiIjNDVlM2ZmIiwibWFjZERpdmVyZ2VuY2VDb2xvciI6IiNmZjdiMTIiLCJtYWNkTWFjZENvbG9yIjoiIzc4N2Q4MiIsIm1hY2RTaWduYWxDb2xvciI6IiMwMDAwMDAiLCJyc2lMaW5lQ29sb3IiOiIjZmZiNzAwIiwic3RvY2hLTGluZUNvbG9yIjoiI2ZmYjcwMCIsInN0b2NoRExpbmVDb2xvciI6IiM0NWUzZmYiLCJsaW5lVHlwZSI6ImNhbmRsZSIsInJhbmdlIjoiM21vIn0%3D";

      window.open(YHOO_LINK + ticker + YHOO_PARAMS);

      $("#ticker").val('');
  });

});
