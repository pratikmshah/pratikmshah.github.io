var ticker;
var financialLinks = {};
var ratioLinks = {};
var insiderLinks = {};
var ownershipLinks = {};
var statsLinks = {};
var socialLinks = {};

$(function() {

  // get chart after keypress in ticker input
  // update the website links
  $('#ticker').on('keyup', function() {
    ticker = $('#ticker').val();
    var cLink = getFinvizChart(ticker);
    $("#stock-chart img").attr("src", cLink);
    updateLinks();
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


// function update links
function updateLinks() {
  financialLinks = {
    marketwatchFin: "https://www.marketwatch.com/investing/stock/" + ticker +"/financials",
    yahooFin: "https://finance.yahoo.com/quote/" + ticker + "/financials?",
    nasdaqFin: "https://www.nasdaq.com/symbol/" + ticker + "/financials?",
    secFin: "https://www.sec.gov/cgi-bin/browse-edgar?CIK=" + ticker
  };

  ratioLinks = {
    marketwatchRatio: "https://www.marketwatch.com/investing/stock/" + ticker + "/profile",
    reutersRatio: "https://www.reuters.com/finance/stocks/financial-highlights/" + ticker
  };

  insiderLinks = {
    marketwatchOfficer: "https://www.marketwatch.com/investing/stock/" + ticker + "/insideractions",
    reutersOfficer: "https://www.reuters.com/finance/stocks/company-officers/" + ticker
  };

  ownershipLinks = {
    marketwatchInsider: "https://www.marketwatch.com/investing/stock/" + ticker + "/insideractions",
    finvizInsider: "https://finviz.com/quote.ashx?t=" + ticker,
    nasdaqInsider: "https://www.nasdaq.com/symbol/" + ticker + "/ownership-summary"
  };

  statsLinks = {
    finvizStats: "https://finviz.com/quote.ashx?t=" + ticker,
    marketwatchStats: "https://www.marketwatch.com/investing/stock/" + ticker,
    earningsStats: "https://earningscast.com/companies/" + ticker
  };

  socialLinks = {
    twitterSocial: "https://twitter.com/search?q="
  }
}
