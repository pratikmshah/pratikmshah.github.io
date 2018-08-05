var ticker;

$(function() {

  // get chart after keypress in ticker input
  $('#ticker').on('keyup', function() {
    ticker = $('#ticker').val();
    var cLink = getFinvizChart(ticker);
    $("#stock-chart img").attr("src", cLink);
  });

});


// get chart from finviz

function getFinvizChart(ticker) {
  return "https://finviz.com/chart.ashx?t=" + ticker + "&ty=c&ta=1&p=d&s=l"
}
