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

    var myList = ['trades.txt', 'investments.txt'];

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
    openInNewTab(["https://watchnewslive.tv/watch-cnbc-live-stream-free-24-7/"]);
  } else if (userCmd == "NUM") {
    openInNewTab(["http://pratikmshah.github.io/tradelytics/apps/numbers/numbers.html"]);
  } else if (userCmd == "SEARCH") {
    openInNewTab(["https://docs.google.com/spreadsheets/d/17GLAgTKGnVbRGqBJyYDuVOeDbHZOrxrlezlzAcGk-vg/edit?usp=sharing"]);
  } else if (userCmd == "OPENL") {
    openInNewTab(["https://stocktwits.com/",
                  "https://seekingalpha.com/"]);
  } else if (userCmd == "OPEN") {
    openInNewTab(["https://www.cnbc.com/",
                  "https://www.marketwatch.com/tools/screener/premarket?mod=stocks",
                  "https://www.marketwatch.com/tools/stockresearch/updown/?mod=stocks",
                  "https://www.barchart.com/options/most-active/stocks",
                  "https://twitter.com/home",
                  "https://stocktwits.com/",
                  "https://seekingalpha.com/",
                  "https://www.tdameritrade.com/home.page",
                  "https://watchnewslive.tv/watch-cnbc-live-stream-free-24-7/"]);
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
  if(pshahListCounter == 1) {
    pshahListCounter--;
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
