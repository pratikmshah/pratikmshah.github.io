var watchlist = 'watchlist';
var pshahListCounter = 0;

$(function() {

  onLoad();

  // execute and return charts for stock tickers from text box
  $('#run').on('click', function() {
    var value = $.trim($("#stock-ticker").val());

    // if there is no commmand query get charts or clear search
    if(value.length) {
      if(value[0] == '-') {
        commandExe(value);
      } else {
        var tickers = parseTickerSymbols();
        var copyTickers = tickers.slice();
        tickers = createUrls(tickers);
        displayCharts(tickers, copyTickers);
      }
    } else {
      clear();
    }

  });

  // execute above method when user hits enter in input box
  $("#stock-ticker").on("keypress", function(e) {
    if(e.which == 13) { $("#run").trigger('click') }
  });

  // erase input box on click of x button
  $('#erase').on('click', function() {
    $('#stock-ticker').val('');
    $('#erase').hide();
  });

  // check values inside textbox and toggle cancel button
  $('#search').on('change paste keyup', function() {
    if($('#stock-ticker').val().length) {
      $('#erase').show();
    } else {
      $('#erase').hide();
    }
  });

  // retrieve stock data from mystocks.json file
  $('#snowb').on('click', function() {

    var myList = ['trades.txt', 'investments.txt', 'dad.txt'];

    $.get(myList[pshahListCounter], function(data) {
      $("#stock-ticker").val(data);
      $('#erase').show();
      pshahListCounterCheck();
    });
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
      arr[i] = URL_BASE + arr[i].toUpperCase() + URL_CHART_SPEC + new Date().getTime();
    }

    return arr;
  }

  // display charts onto the page
  function displayCharts(arr, sym) {
    $chart = $('#charts');
    $('#charts div').remove();
    $('#save').show();

    for (var i = 0; i < arr.length; i++) {
      $chart.append('<div class="chart-container"> <img src=' + arr[i] + ' class="chart" data-border-color="black" /> <input type="checkbox"  name="watchlist" value=' + sym[i].toUpperCase() + '> <br> <div class="col-sm-2 col-sm-offset-5 text-center"> <div class="col-xs-6 col-xs-offset-2""> <a href="https://finviz.com/quote.ashx?t=' + sym[i].toUpperCase() + '" target="_blank" class="chart-link glyphicon glyphicon-object-align-bottom"></a> <a href="https://www.marketwatch.com/investing/stock/' + sym[i].toUpperCase() +'/financials" target="_blank" class="chart-link glyphicon glyphicon-usd"></a> <a href="https://seekingalpha.com/symbol/' + sym[i].toUpperCase() + '" target="_blank" class="chart-link glyphicon glyphicon-book"></a> <a href="https://stocktwits.com/symbol/' + sym[i].toUpperCase() + '" target="_blank" class="chart-link glyphicon glyphicon-comment"></a> </div> </div> </div>');
    }

  }

  // on double click change border color to green or black
  $('#charts').on('click', '.chart-container img', function() {
    $this = $(this);

    if($this.attr('data-border-color') === 'black') {
      $this.attr('data-border-color', 'green');
      $this.css('border-color', '#ea0a8e');
      $this.next().prop("checked", true);
    } else {
      $this.attr('data-border-color', 'black');
      $this.css('border-color', 'black');
      $this.next().prop("checked", false);
    }

  });

  // save watchlist
  $('#save').on('click', function() {
    if($("input:checkbox:checked").length) {
      getWatchlist();
    }
  });

  // generate watchlist file
  function getWatchlist() {
    var tickers = parseWatchlist();
    var file = new Blob(tickers, { type: "text/plain;charset=utf-8" });
    saveAs(file, watchlist + ".txt");
  }

  // parse watchlist
  function parseWatchlist() {
    var tickers = $("input:checkbox:checked").map(function() {
      return $(this).val() + ',';
    }).get();

    return tickers;
  }

  // set watchlist name
  $('#scans li a').on('click', function() {
    watchlist = $(this).attr("data-text");
  });

  $('#etf-scans li a').on('click', function() {
    watchlist = $(this).attr("data-text");
  });

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

  $('#news').imagesLoaded( function() {
    $("#news div").masonry({
      FitWidth: true,
      itemSelector: 'grid'
    });
  });

});

// hide save button, reset values on texbox when page loads
function onLoad() {
  hide();
  infoTabs();
  inputFocus();
  inputFocusOut();
  changeInputWidth()
}

function hide() {
  $('#save').hide();
  clearSearch();
}

function clear() {
  $('#charts').empty();
  $('#save').hide();
  clearSearch();
}

function infoTabs() {
  $('#infoTabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  })
}

function inputFocus() {
  $("#stock-ticker").focus(function() {
    $(this).addClass("input-focus-txt");
    $("#erase").addClass("input-focus-del");
    $("#run").addClass("input-focus-btn");
  });
}

function inputFocusOut() {
  $("#stock-ticker").blur(function() {
    $(this).removeClass("input-focus-txt");
    $("#erase").removeClass("input-focus-del");
    $("#run").removeClass("input-focus-btn");
  });
}

function changeInputWidth() {
  var $input = $("#search");
  var $performance = $("#performance");

  if( $(window).width() > 2000 ) {
    $input.removeClass()
          .addClass('col-lg-6 col-lg-offset-3');
    $performance.removeClass()
          .addClass('col-lg-8 col-lg-offset-2');
  } else if( $(window).width() > 1700 ) {
    $input.removeClass()
          .addClass('col-md-8 col-md-offset-2');
  }
}


// Command Execute
function commandExe(str) {

  var userCmd = str.substring(1).toUpperCase() // get user command
  var charCmd = str[1].toUpperCase();

  if (charCmd == 'C') {
    compareEquities(str);
  } else if (charCmd == 'A') {
    stockAnalysis(str.slice(3).split(","));
  } else if (userCmd == "TD") {
    openInNewTab(["https://www.tdameritrade.com/home.page"]);
  } else if (userCmd == "TV") {
    openInNewTab(["https://www.newslive.com/american/cnbc.html"]);
  } else if (userCmd == "NUM") {
    openInNewTab(["http://pratikmshah.github.io/tradelytics/apps/numbers/numbers.html"]);
  } else if (userCmd == "SEARCH") {
    openInNewTab(["www.google.com"]);
  } else if (userCmd == "RELSTR") {
    openInNewTab(["https://finviz.com/screener.ashx?v=141&f=geo_usa,ind_exchangetradedfund,sh_avgvol_o300,ta_perf_1wup&ft=3&o=-perf1w",
                  "https://finviz.com/screener.ashx?v=111&f=cap_midover,geo_usa,ind_stocksonly,ta_perf_1wup&o=-change",
                  "https://finviz.com/map.ashx?t=sec&st=w1",
                  "https://www.barchart.com/stocks/sectors/rankings?timeFrame=5d",
                  "https://finance.yahoo.com/chart/SPY#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjEwLjQzNDA0MjU1MzE5MTQ4OSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoicGVyY2VudCIsInBhbmVscyI6eyJjaGFydCI6eyJwZXJjZW50IjoxLCJkaXNwbGF5IjoiU1BZIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwidm9sIHVuZHIiXX19LCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsImV2ZW50TWFwIjp7ImNvcnBvcmF0ZSI6e30sInNpZ0RldiI6e319LCJjdXN0b21SYW5nZSI6bnVsbCwic3ltYm9scyI6W3sic3ltYm9sIjoiU1BZIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlNQWSIsInF1b3RlVHlwZSI6IkVURiIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjEsImJhc2UiOiJ5dGQiLCJwZXJpb2RpY2l0eSI6eyJwZXJpb2QiOjEsImludGVydmFsIjoiZGF5In19fSx7InN5bWJvbCI6IkRJQSIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJESUEifSwicGVyaW9kaWNpdHkiOjEsImludGVydmFsIjoiZGF5IiwidGltZVVuaXQiOm51bGwsInNldFNwYW4iOnsibXVsdGlwbGllciI6MSwiYmFzZSI6Inl0ZCIsInBlcmlvZGljaXR5Ijp7InBlcmlvZCI6MSwiaW50ZXJ2YWwiOiJkYXkifX0sImlkIjoiRElBIiwicGFyYW1ldGVycyI6eyJjb2xvciI6IiNmZjMzM2EiLCJ3aWR0aCI6MiwiaXNDb21wYXJpc29uIjp0cnVlLCJjaGFydE5hbWUiOiJjaGFydCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJESUEifSwicGFuZWwiOiJjaGFydCIsImFjdGlvbiI6bnVsbCwic2hhcmVZQXhpcyI6dHJ1ZSwic3ltYm9sIjoiRElBIiwiZ2FwRGlzcGxheVN0eWxlIjoidHJhbnNwYXJlbnQiLCJuYW1lIjoiSzAyRk01TEVIMyIsIm92ZXJDaGFydCI6dHJ1ZSwidXNlQ2hhcnRMZWdlbmQiOnRydWUsImhlaWdodFBlcmNlbnRhZ2UiOjAuNywib3BhY2l0eSI6MSwiaGlnaGxpZ2h0YWJsZSI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJzdHlsZSI6InN0eF9saW5lX2NoYXJ0IiwiZmlsbEdhcHMiOmZhbHNlLCJoaWdobGlnaHQiOmZhbHNlfX0seyJzeW1ib2wiOiJYTEYiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExGIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjEsImJhc2UiOiJ5dGQiLCJwZXJpb2RpY2l0eSI6eyJwZXJpb2QiOjEsImludGVydmFsIjoiZGF5In19LCJpZCI6IlhMRiIsInBhcmFtZXRlcnMiOnsiY29sb3IiOiIjMDBiMDYxIiwid2lkdGgiOjIsImlzQ29tcGFyaXNvbiI6dHJ1ZSwiY2hhcnROYW1lIjoiY2hhcnQiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExGIn0sInBhbmVsIjoiY2hhcnQiLCJhY3Rpb24iOm51bGwsInNoYXJlWUF4aXMiOnRydWUsInN5bWJvbCI6IlhMRiIsImdhcERpc3BsYXlTdHlsZSI6InRyYW5zcGFyZW50IiwibmFtZSI6IkswMkZNWDdTSVMiLCJvdmVyQ2hhcnQiOnRydWUsInVzZUNoYXJ0TGVnZW5kIjp0cnVlLCJoZWlnaHRQZXJjZW50YWdlIjowLjcsIm9wYWNpdHkiOjEsImhpZ2hsaWdodGFibGUiOnRydWUsInR5cGUiOiJsaW5lIiwic3R5bGUiOiJzdHhfbGluZV9jaGFydCIsImZpbGxHYXBzIjpmYWxzZSwiaGlnaGxpZ2h0IjpmYWxzZX19LHsic3ltYm9sIjoiWExZIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlhMWSJ9LCJwZXJpb2RpY2l0eSI6MSwiaW50ZXJ2YWwiOiJkYXkiLCJ0aW1lVW5pdCI6bnVsbCwic2V0U3BhbiI6eyJtdWx0aXBsaWVyIjoxLCJiYXNlIjoieXRkIiwicGVyaW9kaWNpdHkiOnsicGVyaW9kIjoxLCJpbnRlcnZhbCI6ImRheSJ9fSwiaWQiOiJYTFkiLCJwYXJhbWV0ZXJzIjp7ImNvbG9yIjoiI2FkNmVmZiIsIndpZHRoIjoyLCJpc0NvbXBhcmlzb24iOnRydWUsImNoYXJ0TmFtZSI6ImNoYXJ0Iiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlhMWSJ9LCJwYW5lbCI6ImNoYXJ0IiwiYWN0aW9uIjpudWxsLCJzaGFyZVlBeGlzIjp0cnVlLCJzeW1ib2wiOiJYTFkiLCJnYXBEaXNwbGF5U3R5bGUiOiJ0cmFuc3BhcmVudCIsIm5hbWUiOiJLMDJHU04yT0g1Iiwib3ZlckNoYXJ0Ijp0cnVlLCJ1c2VDaGFydExlZ2VuZCI6dHJ1ZSwiaGVpZ2h0UGVyY2VudGFnZSI6MC43LCJvcGFjaXR5IjoxLCJoaWdobGlnaHRhYmxlIjp0cnVlLCJ0eXBlIjoibGluZSIsInN0eWxlIjoic3R4X2xpbmVfY2hhcnQiLCJmaWxsR2FwcyI6ZmFsc2UsImhpZ2hsaWdodCI6ZmFsc2V9fSx7InN5bWJvbCI6IlhMUCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFAifSwicGVyaW9kaWNpdHkiOjEsImludGVydmFsIjoiZGF5IiwidGltZVVuaXQiOm51bGwsInNldFNwYW4iOnsibXVsdGlwbGllciI6MSwiYmFzZSI6Inl0ZCIsInBlcmlvZGljaXR5Ijp7InBlcmlvZCI6MSwiaW50ZXJ2YWwiOiJkYXkifX0sImlkIjoiWExQIiwicGFyYW1ldGVycyI6eyJjb2xvciI6IiNmZjgwYzUiLCJ3aWR0aCI6MiwiaXNDb21wYXJpc29uIjp0cnVlLCJjaGFydE5hbWUiOiJjaGFydCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFAifSwicGFuZWwiOiJjaGFydCIsImFjdGlvbiI6bnVsbCwic2hhcmVZQXhpcyI6dHJ1ZSwic3ltYm9sIjoiWExQIiwiZ2FwRGlzcGxheVN0eWxlIjoidHJhbnNwYXJlbnQiLCJuYW1lIjoiSzAyR1QyT0xSQyIsIm92ZXJDaGFydCI6dHJ1ZSwidXNlQ2hhcnRMZWdlbmQiOnRydWUsImhlaWdodFBlcmNlbnRhZ2UiOjAuNywib3BhY2l0eSI6MSwiaGlnaGxpZ2h0YWJsZSI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJzdHlsZSI6InN0eF9saW5lX2NoYXJ0IiwiZmlsbEdhcHMiOmZhbHNlLCJoaWdobGlnaHQiOmZhbHNlfX0seyJzeW1ib2wiOiJYTEUiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExFIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjEsImJhc2UiOiJ5dGQiLCJwZXJpb2RpY2l0eSI6eyJwZXJpb2QiOjEsImludGVydmFsIjoiZGF5In19LCJpZCI6IlhMRSIsInBhcmFtZXRlcnMiOnsiY29sb3IiOiIjZmZiZDc0Iiwid2lkdGgiOjIsImlzQ29tcGFyaXNvbiI6dHJ1ZSwiY2hhcnROYW1lIjoiY2hhcnQiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExFIn0sInBhbmVsIjoiY2hhcnQiLCJhY3Rpb24iOm51bGwsInNoYXJlWUF4aXMiOnRydWUsInN5bWJvbCI6IlhMRSIsImdhcERpc3BsYXlTdHlsZSI6InRyYW5zcGFyZW50IiwibmFtZSI6IkswMkdUVkxVV1AiLCJvdmVyQ2hhcnQiOnRydWUsInVzZUNoYXJ0TGVnZW5kIjp0cnVlLCJoZWlnaHRQZXJjZW50YWdlIjowLjcsIm9wYWNpdHkiOjEsImhpZ2hsaWdodGFibGUiOnRydWUsInR5cGUiOiJsaW5lIiwic3R5bGUiOiJzdHhfbGluZV9jaGFydCIsImZpbGxHYXBzIjpmYWxzZSwiaGlnaGxpZ2h0IjpmYWxzZX19LHsic3ltYm9sIjoiWExJIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlhMSSJ9LCJwZXJpb2RpY2l0eSI6MSwiaW50ZXJ2YWwiOiJkYXkiLCJ0aW1lVW5pdCI6bnVsbCwic2V0U3BhbiI6eyJtdWx0aXBsaWVyIjoxLCJiYXNlIjoieXRkIiwicGVyaW9kaWNpdHkiOnsicGVyaW9kIjoxLCJpbnRlcnZhbCI6ImRheSJ9fSwiaWQiOiJYTEkiLCJwYXJhbWV0ZXJzIjp7ImNvbG9yIjoiI2ZmZGI0OCIsIndpZHRoIjoyLCJpc0NvbXBhcmlzb24iOnRydWUsImNoYXJ0TmFtZSI6ImNoYXJ0Iiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlhMSSJ9LCJwYW5lbCI6ImNoYXJ0IiwiYWN0aW9uIjpudWxsLCJzaGFyZVlBeGlzIjp0cnVlLCJzeW1ib2wiOiJYTEkiLCJnYXBEaXNwbGF5U3R5bGUiOiJ0cmFuc3BhcmVudCIsIm5hbWUiOiJLMDJHVUlDTVgwIiwib3ZlckNoYXJ0Ijp0cnVlLCJ1c2VDaGFydExlZ2VuZCI6dHJ1ZSwiaGVpZ2h0UGVyY2VudGFnZSI6MC43LCJvcGFjaXR5IjoxLCJoaWdobGlnaHRhYmxlIjp0cnVlLCJ0eXBlIjoibGluZSIsInN0eWxlIjoic3R4X2xpbmVfY2hhcnQiLCJmaWxsR2FwcyI6ZmFsc2UsImhpZ2hsaWdodCI6ZmFsc2V9fSx7InN5bWJvbCI6IlhMViIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFYifSwicGVyaW9kaWNpdHkiOjEsImludGVydmFsIjoiZGF5IiwidGltZVVuaXQiOm51bGwsInNldFNwYW4iOnsibXVsdGlwbGllciI6MSwiYmFzZSI6Inl0ZCIsInBlcmlvZGljaXR5Ijp7InBlcmlvZCI6MSwiaW50ZXJ2YWwiOiJkYXkifX0sImlkIjoiWExWIiwicGFyYW1ldGVycyI6eyJjb2xvciI6IiM2NGYxZDkiLCJ3aWR0aCI6MiwiaXNDb21wYXJpc29uIjp0cnVlLCJjaGFydE5hbWUiOiJjaGFydCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFYifSwicGFuZWwiOiJjaGFydCIsImFjdGlvbiI6bnVsbCwic2hhcmVZQXhpcyI6dHJ1ZSwic3ltYm9sIjoiWExWIiwiZ2FwRGlzcGxheVN0eWxlIjoidHJhbnNwYXJlbnQiLCJuYW1lIjoiSzAyR1Y2MlpVVyIsIm92ZXJDaGFydCI6dHJ1ZSwidXNlQ2hhcnRMZWdlbmQiOnRydWUsImhlaWdodFBlcmNlbnRhZ2UiOjAuNywib3BhY2l0eSI6MSwiaGlnaGxpZ2h0YWJsZSI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJzdHlsZSI6InN0eF9saW5lX2NoYXJ0IiwiZmlsbEdhcHMiOmZhbHNlLCJoaWdobGlnaHQiOmZhbHNlfX0seyJzeW1ib2wiOiJYTEIiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExCIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjEsImJhc2UiOiJ5dGQiLCJwZXJpb2RpY2l0eSI6eyJwZXJpb2QiOjEsImludGVydmFsIjoiZGF5In19LCJpZCI6IlhMQiIsInBhcmFtZXRlcnMiOnsiY29sb3IiOiIjYWUxMTI1Iiwid2lkdGgiOjIsImlzQ29tcGFyaXNvbiI6dHJ1ZSwic2hhcmVZQXhpcyI6dHJ1ZSwiY2hhcnROYW1lIjoiY2hhcnQiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExCIn0sInBhbmVsIjoiY2hhcnQiLCJmaWxsR2FwcyI6ZmFsc2UsImFjdGlvbiI6ImFkZC1zZXJpZXMiLCJzeW1ib2wiOiJYTEIiLCJnYXBEaXNwbGF5U3R5bGUiOiJ0cmFuc3BhcmVudCIsIm5hbWUiOiJYTEIiLCJvdmVyQ2hhcnQiOnRydWUsInVzZUNoYXJ0TGVnZW5kIjp0cnVlLCJoZWlnaHRQZXJjZW50YWdlIjowLjcsIm9wYWNpdHkiOjEsImhpZ2hsaWdodGFibGUiOnRydWUsInR5cGUiOiJsaW5lIiwic3R5bGUiOiJzdHhfbGluZV9jaGFydCIsImhpZ2hsaWdodCI6ZmFsc2V9fSx7InN5bWJvbCI6IlhMUkUiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWExSRSJ9LCJwZXJpb2RpY2l0eSI6MSwiaW50ZXJ2YWwiOiJkYXkiLCJ0aW1lVW5pdCI6bnVsbCwic2V0U3BhbiI6eyJtdWx0aXBsaWVyIjoxLCJiYXNlIjoieXRkIiwicGVyaW9kaWNpdHkiOnsicGVyaW9kIjoxLCJpbnRlcnZhbCI6ImRheSJ9fSwiaWQiOiJYTFJFIiwicGFyYW1ldGVycyI6eyJjb2xvciI6IiM2NTAwZTgiLCJ3aWR0aCI6MiwiaXNDb21wYXJpc29uIjp0cnVlLCJzaGFyZVlBeGlzIjp0cnVlLCJjaGFydE5hbWUiOiJjaGFydCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFJFIn0sInBhbmVsIjoiY2hhcnQiLCJmaWxsR2FwcyI6ZmFsc2UsImFjdGlvbiI6ImFkZC1zZXJpZXMiLCJzeW1ib2wiOiJYTFJFIiwiZ2FwRGlzcGxheVN0eWxlIjoidHJhbnNwYXJlbnQiLCJuYW1lIjoiWExSRSIsIm92ZXJDaGFydCI6dHJ1ZSwidXNlQ2hhcnRMZWdlbmQiOnRydWUsImhlaWdodFBlcmNlbnRhZ2UiOjAuNywib3BhY2l0eSI6MSwiaGlnaGxpZ2h0YWJsZSI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJzdHlsZSI6InN0eF9saW5lX2NoYXJ0IiwiaGlnaGxpZ2h0IjpmYWxzZX19LHsic3ltYm9sIjoiWExLIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlhMSyJ9LCJwZXJpb2RpY2l0eSI6MSwiaW50ZXJ2YWwiOiJkYXkiLCJ0aW1lVW5pdCI6bnVsbCwic2V0U3BhbiI6eyJtdWx0aXBsaWVyIjoxLCJiYXNlIjoieXRkIiwicGVyaW9kaWNpdHkiOnsicGVyaW9kIjoxLCJpbnRlcnZhbCI6ImRheSJ9fSwiaWQiOiJYTEsiLCJwYXJhbWV0ZXJzIjp7ImNvbG9yIjoiIzAwMDAwMCIsIndpZHRoIjoyLCJpc0NvbXBhcmlzb24iOnRydWUsImNoYXJ0TmFtZSI6ImNoYXJ0Iiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IlhMSyJ9LCJwYW5lbCI6ImNoYXJ0IiwiYWN0aW9uIjpudWxsLCJzaGFyZVlBeGlzIjp0cnVlLCJzeW1ib2wiOiJYTEsiLCJnYXBEaXNwbGF5U3R5bGUiOiJ0cmFuc3BhcmVudCIsIm5hbWUiOiJLMDJHWVpVNlFLIiwib3ZlckNoYXJ0Ijp0cnVlLCJ1c2VDaGFydExlZ2VuZCI6dHJ1ZSwiaGVpZ2h0UGVyY2VudGFnZSI6MC43LCJvcGFjaXR5IjoxLCJoaWdobGlnaHRhYmxlIjp0cnVlLCJ0eXBlIjoibGluZSIsInN0eWxlIjoic3R4X2xpbmVfY2hhcnQiLCJmaWxsR2FwcyI6ZmFsc2UsImhpZ2hsaWdodCI6ZmFsc2V9fSx7InN5bWJvbCI6IlhMVSIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFUifSwicGVyaW9kaWNpdHkiOjEsImludGVydmFsIjoiZGF5IiwidGltZVVuaXQiOm51bGwsInNldFNwYW4iOnsibXVsdGlwbGllciI6MSwiYmFzZSI6Inl0ZCIsInBlcmlvZGljaXR5Ijp7InBlcmlvZCI6MSwiaW50ZXJ2YWwiOiJkYXkifX0sImlkIjoiWExVIiwicGFyYW1ldGVycyI6eyJjb2xvciI6IiM3NjdkODQiLCJ3aWR0aCI6MiwiaXNDb21wYXJpc29uIjp0cnVlLCJjaGFydE5hbWUiOiJjaGFydCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTFUifSwicGFuZWwiOiJjaGFydCIsImFjdGlvbiI6bnVsbCwic2hhcmVZQXhpcyI6dHJ1ZSwic3ltYm9sIjoiWExVIiwiZ2FwRGlzcGxheVN0eWxlIjoidHJhbnNwYXJlbnQiLCJuYW1lIjoiSzAyR1lXMEdNNiIsIm92ZXJDaGFydCI6dHJ1ZSwidXNlQ2hhcnRMZWdlbmQiOnRydWUsImhlaWdodFBlcmNlbnRhZ2UiOjAuNywib3BhY2l0eSI6MSwiaGlnaGxpZ2h0YWJsZSI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJzdHlsZSI6InN0eF9saW5lX2NoYXJ0IiwiZmlsbEdhcHMiOmZhbHNlLCJoaWdobGlnaHQiOmZhbHNlfX0seyJzeW1ib2wiOiJYQkkiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWEJJIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjEsImJhc2UiOiJ5dGQiLCJwZXJpb2RpY2l0eSI6eyJwZXJpb2QiOjEsImludGVydmFsIjoiZGF5In19LCJpZCI6IlhCSSIsInBhcmFtZXRlcnMiOnsiY29sb3IiOiIjZTA5YzAwIiwid2lkdGgiOjIsImlzQ29tcGFyaXNvbiI6dHJ1ZSwic2hhcmVZQXhpcyI6dHJ1ZSwiY2hhcnROYW1lIjoiY2hhcnQiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWEJJIn0sInBhbmVsIjoiY2hhcnQiLCJmaWxsR2FwcyI6ZmFsc2UsImFjdGlvbiI6ImFkZC1zZXJpZXMiLCJzeW1ib2wiOiJYQkkiLCJnYXBEaXNwbGF5U3R5bGUiOiJ0cmFuc3BhcmVudCIsIm5hbWUiOiJYQkkiLCJvdmVyQ2hhcnQiOnRydWUsInVzZUNoYXJ0TGVnZW5kIjp0cnVlLCJoZWlnaHRQZXJjZW50YWdlIjowLjcsIm9wYWNpdHkiOjEsImhpZ2hsaWdodGFibGUiOnRydWUsInR5cGUiOiJsaW5lIiwic3R5bGUiOiJzdHhfbGluZV9jaGFydCIsImhpZ2hsaWdodCI6ZmFsc2V9fSx7InN5bWJvbCI6IlhMQyIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTEMifSwicGVyaW9kaWNpdHkiOjEsImludGVydmFsIjoiZGF5IiwidGltZVVuaXQiOm51bGwsInNldFNwYW4iOnsibXVsdGlwbGllciI6MSwiYmFzZSI6Inl0ZCIsInBlcmlvZGljaXR5Ijp7InBlcmlvZCI6MSwiaW50ZXJ2YWwiOiJkYXkifX0sImlkIjoiWExDIiwicGFyYW1ldGVycyI6eyJjb2xvciI6IiNiOWJkYzUiLCJ3aWR0aCI6MiwiaXNDb21wYXJpc29uIjp0cnVlLCJzaGFyZVlBeGlzIjp0cnVlLCJjaGFydE5hbWUiOiJjaGFydCIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJYTEMifSwicGFuZWwiOiJjaGFydCIsImZpbGxHYXBzIjpmYWxzZSwiYWN0aW9uIjoiYWRkLXNlcmllcyIsInN5bWJvbCI6IlhMQyIsImdhcERpc3BsYXlTdHlsZSI6InRyYW5zcGFyZW50IiwibmFtZSI6IlhMQyIsIm92ZXJDaGFydCI6dHJ1ZSwidXNlQ2hhcnRMZWdlbmQiOnRydWUsImhlaWdodFBlcmNlbnRhZ2UiOjAuNywib3BhY2l0eSI6MSwiaGlnaGxpZ2h0YWJsZSI6dHJ1ZSwidHlwZSI6ImxpbmUiLCJzdHlsZSI6InN0eF9saW5lX2NoYXJ0IiwiaGlnaGxpZ2h0IjpmYWxzZX19XSwic3R1ZGllcyI6eyJ2b2wgdW5kciI6eyJ0eXBlIjoidm9sIHVuZHIiLCJpbnB1dHMiOnsiaWQiOiJ2b2wgdW5kciIsImRpc3BsYXkiOiJ2b2wgdW5kciJ9LCJvdXRwdXRzIjp7IlVwIFZvbHVtZSI6IiMwMGIwNjEiLCJEb3duIFZvbHVtZSI6IiNGRjMzM0EifSwicGFuZWwiOiJjaGFydCIsInBhcmFtZXRlcnMiOnsid2lkdGhGYWN0b3IiOjAuNDUsImNoYXJ0TmFtZSI6ImNoYXJ0IiwicGFuZWxOYW1lIjoiY2hhcnQifX19LCJyYW5nZSI6eyJkdExlZnQiOiIyMDE5LTEyLTMxVDIzOjM2OjIzLjg1OVoiLCJiYXNlIjoieXRkIiwicGVyaW9kaWNpdHkiOnsicGVyaW9kIjoxLCJpbnRlcnZhbCI6ImRheSJ9LCJwYWRkaW5nIjowfSwic2V0U3BhbiI6eyJtdWx0aXBsaWVyIjoxLCJiYXNlIjoieXRkIiwicGVyaW9kaWNpdHkiOnsicGVyaW9kIjoxLCJpbnRlcnZhbCI6ImRheSJ9fX0-",
                  "https://etfdb.com/etfs/industry/#industry-power-rankings__return-leaderboard&sort_name=fund_flow_position&sort_order=asc&page=1"]);
  } else if (userCmd == "OPENL") {
    openInNewTab(["https://stocktwits.com/",
                  "https://seekingalpha.com/",
                  "https://docs.google.com/spreadsheets/d/1kq6WIjdSMlDa6zhCIUcru-xeyqJAq1lC3D2Uak7htWc/",
                  "https://twitter.com/home"]);
  } else if (userCmd == "OPEN") {
    openInNewTab(["https://www.forexfactory.com/calendar",
                  "https://www.cnbc.com/",
                  "https://www.marketwatch.com/tools/screener/premarket?mod=stocks",
                  "https://www.marketwatch.com/tools/stockresearch/updown/?mod=stocks",
                  "https://www.barchart.com/options/most-active/stocks",
                  "https://twitter.com/home",
                  "https://stocktwits.com/",
                  "https://seekingalpha.com/",
                  "https://www.tdameritrade.com/home.page",
                  "https://docs.google.com/spreadsheets/d/1kq6WIjdSMlDa6zhCIUcru-xeyqJAq1lC3D2Uak7htWc/",
                  "https://www.newslive.com/american/cnbc.html"]);
  } else if (userCmd == "ETFSTR") {
    openInNewTab(["https://docs.google.com/spreadsheets/d/1kq6WIjdSMlDa6zhCIUcru-xeyqJAq1lC3D2Uak7htWc/"]);
  } else if (charCmd == 'Q') {
    canslim(str.slice(3).split(","));
  } else if (charCmd == 'S') {
    seekingAlpha(str);
  } else if (userCmd == "HELP") {
    $("#help").modal('show');
  }
  clearSearch();
}

// command functions
function compareEquities(str) {
  const URL_BASE = "http://bigcharts.marketwatch.com/advchart/frames/frames.asp?show=&insttype=Index&symb=SPX&comptemptext=";
  const URL_MID = "&comp=";
  const URL_END = "&ma=0&maval=9&uf=0&lf=1&lf2=0&lf3=0&type=64&style=320&size=4&x=42&y=10&timeFrameToggle=false&compareToToggle=false&indicatorsToggle=false&chartStyleToggle=false&state=15";
  var tickers = str.slice(3).split(",").join("%2C");

  // open new window with constructed urls
  openInNewTab([URL_BASE + tickers + URL_MID + tickers + URL_END]);
}

// open seeking alpha hubs
function seekingAlpha(str) {
  const URL_BASE = "https://seekingalpha.com/symbol/";
  var tickers = combineURL(URL_BASE, str.slice(3).split(","));
  openInNewTab(tickers);
}

// increment pshahListCounter
function pshahListCounterCheck() {
  if(pshahListCounter == 2) {
    pshahListCounter = 0;
  } else {
    pshahListCounter++;
  }
}

// open new window and have window in focus
function openInNewTab(url) {
  for (var i = 0; i < url.length; i++) {
    window.open(url[i], '_blank');
  }
}

// clear search box
function clearSearch() {
  $('#stock-ticker').val('');
  $('#erase').hide();
}

// concate urls base url + array of links to join
function combineURL(base, arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = base + arr[i];
  }
  return arr;
}

function stockAnalysis(ticker) {
  ticker = ticker[0];
  openInNewTab(["https://trends.google.com/trends/?geo=US",
                "https://stocktwits.com/symbol/" + ticker,
                "https://www.linkedin.com/search/results/all/?keywords=" + ticker,
                "https://twitter.com/search?q=" + ticker + "company",
                "https://www.google.com/search?q=" + ticker + " stock+company+news",
                "https://www.marketwatch.com/investing/stock/" + ticker +"/financials",
                "https://finviz.com/quote.ashx?t=" + ticker,
                "https://earningscast.com/companies/" + ticker,
                "https://www.reuters.com/companies/" + ticker + "/people",
                "https://seekingalpha.com/symbol/" + ticker,
                "https://www.sec.gov/cgi-bin/browse-edgar?CIK=" + ticker,
              ]);
}

function canslim(ticker) {
  ticker = ticker[0];
  openInNewTab(["https://www.nasdaq.com/market-activity/stocks/" + ticker + "/institutional-holdings",
                "https://money.cnn.com/quote/shareholders/shareholders.html?symb=" + ticker + "&subView=institutional",
                "https://www.nasdaq.com/market-activity/stocks/" + ticker + "/earnings",
                "https://www.nasdaq.com/market-activity/stocks/" + ticker +"/financials",
                "https://finviz.com/quote.ashx?t=" + ticker
              ]);
}
