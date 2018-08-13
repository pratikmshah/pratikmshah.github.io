var ticker;
var financialLinks = {};
var ratioLinks = {};
var insiderLinks = {};
var ownershipLinks = {};
var statsLinks = {};
var socialLinks = {};

$(function() {

  // get chart after keypress in ticker input, update the website links
  $('#ticker').on('keyup', function() {
    ticker = $('#ticker').val();
    updateFinvizChart();
    updateLinks();
    updateHyperLinks();
    getCompanyInformation();
  });

  // google search button
  $("#google-btn").on('click', function() {
    if ($("#google-search").val()) {
      googleSearch( $("#google-search").val() );
    }
  });

  // social media search
  $('#social-search').on('keyup', function() {
    if($('#social-search').val()) {
      updateSocialLinks($('#social-search').val());
      updateSocialHyperLinks();
    }
  });

  // clear social search box on click
  $('#social-search-btn').on('click', function() {
    $('#social-search').val("");
  });

});


// get chart from finviz
function updateFinvizChart() {
  $("#stock-chart img").attr("src", "https://finviz.com/chart.ashx?t=" + ticker + "&ty=c&ta=1&p=d&s=l");
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
    seekingFin: "https://seekingalpha.com/symbol/" + ticker + "/income-statement",
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
    earningsStats: "https://earningscast.com/companies/" + ticker,
    seekingStats: "https://seekingalpha.com/symbol/" + ticker + "/overview",
    ibkStats: "https://interactivebrokers.com/en/index.php?key=" + ticker +"&cntry=usa&tag=&ib_entity=&ln=&asset=&f=4587&conf=am&amref=1"
  };
}

// updates social links
function updateSocialLinks(terms) {
  socialLinks = {
    twitterSocial: "https://twitter.com/search?q=" + terms,
    facebookSocial: "https://www.facebook.com/search/str/" + multipleTermsJoin(terms) + "/keywords_search",
    youtubeSocial: "https://www.youtube.com/results?search_query="+ multipleTermsJoin(terms),
    linkedinSocial: "https://www.linkedin.com/search/results/index/?keywords=" + terms
  };
}

// edit facebook search text
function multipleTermsJoin(terms) {
  return terms.split(" ").join("+");
}

// update the hyperlinks
function updateHyperLinks() {
  var PATH = " ul li a";
  var arrHtml = [$("#financial" + PATH), $("#ratios" + PATH), $("#officer" + PATH), $("#ownership" + PATH), $("#profile" + PATH)];
  var arrLinks = [financialLinks, ratioLinks, insiderLinks, ownershipLinks, statsLinks];
  var objCounter = 0;

  // loop through arrHtml, then lopp subarray, update href in each element with arrLinks
  arrHtml.forEach(function(link) {
    for (var i = 0; i < link.length; i++) {
      link[i].href = Object.values(arrLinks[objCounter])[i];
    }
    objCounter++;
  });

  $("#stocktwits").attr("href", "https://stocktwits.com/symbol/" + ticker);
}

// updates social links when search is changed
function updateSocialHyperLinks() {
  var arrHtml = $("#social-icons li a");

  for (var i = 0; i < arrHtml.length - 4; i++) {
    arrHtml[i].href = Object.values(socialLinks)[i];
  }
}

// search and update company name, sector, industry
function getCompanyInformation() {
  var SYMBOL = ticker.toUpperCase();
  var index = SYMBOL.charCodeAt(0) - 65;

  // retrieve stock data from stock.json file
  $.getJSON('data/stocks.json', function(data) {
    var arr = data[index];

    for (var i = 0; i < arr.length; i++) {
      if(arr[i].Ticker === SYMBOL) {
        updateCompanyInformation(arr[i]);
        break;
      }
    }
  });
}

// update the value in company info boxes
function updateCompanyInformation(info) {
  $('#company').val(info.Company);
  $('#sector').val(info.Sector);
  $('#industry').val(info.Industry);
}
