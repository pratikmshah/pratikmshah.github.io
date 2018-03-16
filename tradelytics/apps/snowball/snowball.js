$(function() {

  // execute and return charts for stock tickers from text box
  $('#run').on('click', function() {
    var tickers = parseTickerSymbols();
    tickers = createUrls(tickers);
    displayCharts(tickers);
  });

  // parse user text box symbols
  function parseTickerSymbols() {
    return  $('.input-group input').val().split(',');
  }

  // construct chart urls
  function createUrls(arr) {
    const URL_BASE = "https://finviz.com/chart.ashx?t=";
    const URL_CHART_SPEC = "&ty=c&ta=1&p=d&s=l";

    for(var i = 0; i < arr.length; i++) {
      arr[i] = URL_BASE + arr[i].toUpperCase() + URL_CHART_SPEC;
    }

    return arr;
  }

  // display charts onto the page
  function displayCharts(arr) {
    $chart = $('#charts');
    $chart.empty();

    arr.forEach(function(url) {
        $chart.append('<div> <img src=' + url + ' class="chart" /> </div>');
    })
  }

});
