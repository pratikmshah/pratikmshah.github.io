var ticker;

$(function() {

  // get chart after keypress in ticker input
  $('#ticker').on('keyup', function() {
    ticker = $('#ticker').val();
    var cLink = getFinvizChart(ticker);
    $("#stock-chart img").attr("src", cLink);
  });

  // google search button
  $("#google-btn").on('click', function() {
    if ($("#google-search").val()) {
      googleSearch( $("#google-search").val() );
    }
  });

});


// get chart from finviz
function getFinvizChart(ticker) {
  return "https://finviz.com/chart.ashx?t=" + ticker + "&ty=c&ta=1&p=d&s=l"
}

// google search
function googleSearch(str) {
  var GOOGLE_URL = "https://www.google.com/search?q="
  var url = GOOGLE_URL + str.split(" ").join("+");
  window.open(url);
}
