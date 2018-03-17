$(function() {

  // hide save button, reset values on texbox
  $('#save').hide();
  $('#stock-ticker').val('');

  // execute and return charts for stock tickers from text box
  $('#run').on('click', function() {
    var value = $.trim($("#stock-ticker").val());

    if(value.length) {
      var tickers = parseTickerSymbols();
      var copyTickers = tickers.slice();
      tickers = createUrls(tickers);
      displayCharts(tickers, copyTickers);
    }

  });

  // parse user text box symbols
  function parseTickerSymbols() {
    return  $('#stock-ticker').val().split(',');
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
  function displayCharts(arr, sym) {
    $chart = $('#charts');
    $chart.empty();
    $('#save').show();

    for (var i = 0; i < arr.length; i++) {
      $chart.append('<div class="chart-container"> <img src=' + arr[i] + ' class="chart" /> <br> <input type="checkbox"  name="watchlist" value=' + sym[i].toUpperCase() + '> </div>');
    }

  }


  $('#save').on('click', function() {
    getWatchlist();
  });


  // generate watchlist file
  function getWatchlist() {
    var tickers = parseWatchlist();
    var file = new Blob(tickers, { type: "text/plain;charset=utf-8" });
    saveAs(file, "watchlist.txt");
  }

  // parse watchlist
  function parseWatchlist() {
    var tickers = $("input:checkbox:checked").map(function() {
      return $(this).val() + ',';
    }).get();

    return tickers;
  }

  // scroll top
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
