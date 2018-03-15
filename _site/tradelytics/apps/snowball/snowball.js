$(function() {

  // execute and return charts for stock tickers from text box
  $('#run').on('click', function() {
    var tickers = parseTickerSymbols();
  });

  // parse user text box symbols
  function parseTickerSymbols() {
    const URL_BASE = "https://finviz.com/quote.ashx?";
    const URL_CHART_SPEC = "&ty=c&p=d&b=1";
    var $tickers = $('.input-group input').val();

  }

});
