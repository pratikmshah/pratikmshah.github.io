var watchlist = 'watchlist';
var ETF = {
  XLY:"AMZN,HD,NFLX,DIS,CMCSA,MCD,BKNG,NKE,LOW,SBUX,TWX,TJX,GM,CHTR,F,TGT,MAR,FOXA,ROST,YUM,VFC,APTV,CCL,DG,HLT,ORLY,DLTR,BBY,AZO,RCL,CBS,FOX,OMC,MGM,WYNN,ULTA,EXPE,DHI,LEN,GPC,TIF,KMX,KSS,MHK,TPR,PVH,M,NWL,DRI,CMG,NCLH,LKQ,HAS,BWA,VIAB,AAP,KORS,TSCO,WHR,LB,IPG,PHM,RL,DISCK,DISH,HOG,HBI,FL,GPS,GRMN,HRB,GT,TRIP,JWN,NWSA,LEG,MAT,UAA,UA,DISCA,NWS",

  XLP:"PG,KO,PEP,WMT,PM,COST,MO,MDLZ,CL,WBA,STZ,KMB,KHC,EL,SYY,ADM,GIS,MNST,DPS,TSN,KR,CLX,K,CAG,BF-B,HSY,MKC,TAP,CHD,SJM,HRL,CPB,COTY",

  XLE:"XOM,CVX,SLB,COP,OXY,EOG,VLO,PSX,HAL,MPC,APC,PXD,KMI,OKE,DVN,WMB,ANDV,CXO,MRO,NBL,HES,NOV,APA,BHGE,FTI,EQT,COG,XEC,HP,NFX,RRC",

  XLF:"JPM,BRK-B,BAC,WFC,C,GS,USB,AXP,MS,PNC,SCHW,BLK,CB,CME,BK,SPGI,MET,AIG,COF,ICE,BBT,PRU,MMC,STT,PGR,AFL,TRV,AON,ALL,STI,TROW,MCO,DFS,MTB,SYF,NTRS,FITB,KEY,RF,AMP,WLTW,CFG,HIG,ETFC,HBAN,SIVB,CMA,PFG,LNC,MSCI,XL,L,RJF,AJG,CBOE,IVZ,ZION,BEN,NDAQ,CINF,RE,TMK,AMG,UNM,JEF,PBCT,AIZ,BHF",

  XLV:"JNJ,UNH,PFE,MRK,ABBV,AMGN,MDT,ABT,GILD,TMO,BMY,LLY,CVS,BIIB,DHR,BDX,CELG,AET,ANTM,SYK,ISRG,AGN,ESRX,CI,BSX,ZTS,ILMN,HUM,VRTX,BAX,MCK,EW,HCA,ALXN,ALGN,REGN,CNC,ZBH,MYL,A,CERN,IDXX,LH,ABMD,CAH,WAT,RMD,MTD,IQV,DGX,ABC,INCY,VAR,COO,HSIC,HOLX,UHS,DVA,XRAY,PRGO,PKI,NKTR,EVHC",

  XLI:"MMM,GE,HON,UNP,UTX,CAT,LMT,UPS,FDX,RTN,NOC,CSX,GD,DE,EMR,ITW,NSC,ETN,DAL,WM,JCI,ROP,LUV,FTV,PH,PCAR,ROK,COL,IR,CMI,SWK,INFO,AAL,HRS,TXT,AME,VRSK,UAL,TDG,CTAS,GWW,LLL,RSG,FAST,EFX,URI,EXPD,XYL,CHRW,DOV,MAS,KSU,JBHT,NLSN,HII,AOS,SNA,FBHS,RHI,JEC,ALK,ALLE,ARNC,PNR,FLR,PWR,FLS,SRCL,AYI",

  XLB:"DWDP,PX,LYB,APD,ECL,SHW,PPG,IP,FCX,NUE,NEM,VMC,EMN,WRK,MLM,BLL,FMC,PKG,ALB,MOS,CF,IFF,AVY,SEE",

  XLRE:"AMT,SPG,CCI,PLD,PSA,EQIX,WY,EQR,AVB,DLR,WELL,VTR,BXP,SBAC,HST,ESS,O,CBRE,GGP,ARE,VNO,EXR,HCP,MAA,DRE,UDR,IRM,SLG,FRT,REG,KIM,AIV,MAC",

  XLK:"AAPL,MSFT,FB,GOOG,GOOGL,INTC,V,CSCO,T,VZ,MA,NVDA,ORCL,IBM,ADBE,TXN,AVGO,ACN,PYPL,CRM,QCOM,MU,ADP,ATVI,AMAT,INTU,CTSH,EA,HPQ,EBAY,ADI,FIS,TEL,FISV,LRCX,RHT,ADSK,APH,TWTR,GLW,HPE,WDC,DXC,MCHP,PAYX,NTAP,SWKS,GPN,MSI,KLAC,XLNX,CTL,STX,TSS,ANSS,CTXS,SNPS,AKAM,SYMC,VRSN,TTWO,IT,CDNS,AMD,CA,FFIV,ADS,QRVO,WU,JNPR,IPGP,FLIR,XRX",

  XLU:"NEE,DUK,SO,D,EXC,AEP,SRE,PEG,ED,XEL,PCG,EIX,WEC,PPL,DTE,ES,FE,AWK,EVRG,ETR,AEE,CMS,CNP,NRG,LNT,AES,PNW,NI,SCG",

  XTL:"AAOI,UBNT,FFIV,OCLR,CCOI,IDCC,NTGR,PANW,JNPR,MSI,VG,NTCT,VZ,S,CTL,ZAYO,CSCO,ARRS,VIAV,ANET,TDS,T,CNSL,CIEN,FNSR,FTR,TMUS,LITE,VSAT,PLT,ACIA,IRDM,COMM,EXTR,ADTN,INFN,WIFI,SATS,CAMP,ORBC,ATNI,CBB,SHEN,USM,CMTL,GSAT",

  XTH:"FIT,VSH,PAY,EFII,DDD,PSTG,NTAP,IIVI,ZBRA,KEYS,NOVT,AAPL,FLIR,OSIS,KN,LFUS,APH,ESIO,DLB,CTRL,GLW,HPQ,XRX,STX,SMCI,TRMB,NCR,ROG,CGNX,HPE,WDC,NATI,ITRI,COHR,OLED,BDC,DBD,CRAY,BMI,FARO,MTSC,AVX",

  XSW:"GLUU,VRNS,EVTC,FDC,CVLT,TVPT,EPAY,EVBG,ALTR,ZEN,VMW,SYNT,ZNGA,RPD,WEX,INTU,CLGX,SQ,AZPN,ELLI,CTXS,ADP,DATA,FTNT,PCTY,BAH,DVMT,ADBE,IT,RNG,CDNS,SABR,SAIC,BR,MA,RHT,FICO,EVRI,V,TYL,PTC,CACI,SPLK,VRNT,EA,BKI,RP,HUBS,FIS,MSFT,CRM,IMPV,JKHY,ULTI,PYPL,WU,NOW,CVG,VRTU,PFPT,PRO,PAYX,EPAM,CNDT,FISV,PEGA,QLYS,HAWK,OSPN,SNPS,ANSS,GPN,EXLS,ACN,SSNC,GWRE,CATM,CA,MANH,TTWO,TDC,WP,BL,EEFT,ADSK,ACIW,TSS,PRGS,FLT,MSTR,G,FEYE,ATVI,ACXM,MANT,PAYC,TIVO,ADS,EBIX,SYKE,IBM,BLKB,MMS,EGHT,CTSH,CDK,ORCL,WDAY,TYPE,CSGS,LDOS,SWCH,WK,PRFT,NUAN,DXC,UIS,SYMC,SNAP,PSDO,ATEN,TTEC,PRSP",

  SMH:"INTC,TSM,MU,NVDA,TXN,AVGO,ASML,ADI,QCOM,MCHP,NXPI,AMAT,LRCX,KLAC,SWKS,MXIM,AMD,XLNX,CDNS,ON,MRVL,TER,OLED,QRVO,CAVM",

  XRT:"GES,FIVE,TLRD,M,EXPR,FL,SVU,BKE,TIF,DSW,FINL,URBN,TRIP,ULTA,KSS,OLLI,AEO,BURL,W,TSCO,DKS,KMX,RCII,TJX,ODP,HIBB,ORLY,SFLY,TGT,ROST,SIG,ANF,NTRI,AAP,NFLX,DDS,DG,COST,LEXEA,EXPE,AMZN,MNRO,PAG,ABG,JWN,KR,GRPN,CHS,AZO,GCO,PSMT,PLCE,BKNG,GPI,BBY,RAD,WMT,GPS,AN,CVS,LAD,CONN,MUSA,GME,SBH,WBA,MIK,LB,DLTR,BIG,CASY,JCP,SFM,PETS,LTRPA,CAL,EYE,PRTY,QRTEA,CWH,HZO,OSTK,SAH,WMK,IMKTA",

  XWEB:"BCOR,P,TTD,TWLO,NEWR,TRIP,STMP,OKTA,LTRPA,BOX,COUP,ETSY,QTWO,FIVN,W,ALRM,EGOV,NTNX,VRSN,GDDY,TWTR,SFLY,Z,NTRI,NFLX,CSOD,LEXEA,EXPE,AMZN,TWOU,JCOM,GRPN,AKAM,FB,BKNG,IAC,GOOG,GRUB,MB,AYX,SPSC,ENV,CARB,CARS,EBAY,MTCH,TRUE,SSTK,YELP,ANGI,LOGM,HDP,PETS,CLDR,LPSN,GTT,APPF,QRTEA,WEB,INST,QUOT,BNFT,OSTK,GOGO,EIGI,CISN",

  HACK:"PANW,AKAM,VMW,CSCO,SYMC,CYBR,VRNS,SPLK,FTNT,SAIC,FFIV,VRSN,PFPT,CACI,JNPR,FEYE,QLYS,VRNT,CKPT,IMPV,ITRI,MIME,MANT,RDWR",

  XTN:"KEX,EXPD,AAWW,CSX,HUBG,SAIA,GWR,ODFL,ARCB,UPS,XPO,HA,NSC,JBHT,FDX,SNDR,UNP,MIC,UHAL,LSTR,UAL,SKYW,KSU,ALK,CHRW,WERN,DAL,FWRD,ECHO,R,SAVE,ALGT,JBLU,LUV,ATSG,CAR,KNX,AAL,HTZ,HTLD,MATX,MRTN",

  XHE:"DXCM,INGN,ABMD,PEN,QDEL,HAE,ALGN,NEOG,GKOS,HYH,WMGI,IART,AXGN,PODD,ABAX,NXTM,IRTC,MASI,ICUI,CNMD,ISRG,STE,LIVN,GMED,BSX,BAX,IDXX,SYK,HRC,RMD,BABY,MMSI,MDT,WST,TFX,EW,TCMD,BDX,NUVA,ABT,DHR,HSKA,HOLX,VAR,OSUR,ITGR,ZBH,COO,CUTR,NVRO,VREX,CMD,CSII,KTWO,XRAY,IVC,LNTH,ALOG,OFIX,VIVO,ANGO,ELGX,ATRC,CERS,LMAT,ARAY,ANIK,CRY,ATRI",

  XES:"ESV,RIG,NE,WFT,RDC,OIS,OII,DO,CLB,BHGE,NOV,SLCA,CVIA,FTI,SPN,DRQ,NBR,HAL,CJ,FET,SLB,HP,PTEN,MDR,PUMP,FRAC,RES,HLX,UNT,AROC,BRS,BAS,FI,CKH,TDW,EXTN,NR,TTI,MTRX",

  XME:"BTU,CLF,RGLD,STLD,RS,AA,ATI,NEM,NUE,FCX,CMC,CEIX,ARCH,CMP,AKS,CENX,CRS,X,HCC,CDE,HL,WOR,KALU,SCHN,TMST,SXC,MUX,MTRN,HAYN",

  XBI:"IMMU,MDGL,LOXO,SRPT,ONCE,RARE,EXAS,SGEN,LGND,ICPT,AGIO,PTLA,FOLD,BMRN,NBIX,BIIB,FGEN,ARRY,MYGN,UTHR,AMGN,ALXN,ADMS,REGN,HRTX,GILD,IONS,EDIT,CELG,SAGE,GBT,ABBV,VRTX,ALKS,RDUS,ATRA,IRWD,BLUE,ARNA,EXEL,INSM,ALNY,ALDR,SPPI,CLVS,INCY,OPK,IMGN,MDXG,PTCT,DVAX,ACAD,FMI,XON,TSRO,HALO,BPMC,SGMO,FLXN,ANAB,PBYI,EBS,ENTA,EGRX,MNTA,ACOR,AMAG,ESPR,SRNE,AIMT,RGNX,LJPC,NTLA,CARA,ABEO,NVAX,MRTX,AKAO,GLYC,TGTX,RGEN,SGYP,XLRN,ARWR,BOLD,FPRX,GHDX,LXRX,CHRS,VNDA,ZIOP,PGNX,KERX,BCRX,CTMX,RTRX,EPZM,PRTA,INO,XNCR,GERN,VYGR,IOVA,ACHN,ATNX,CYTK,STML,RIGL,MGNX,PDLI,KURA,AKBA,KPTI,AGEN",

  XAR:"AAXN,TDG,AVAV,TXT,TDY,HEI,AJRD,HXL,BA,OA,BWXT,COL,KTOS,KLXI,RTN,ESL,SPR,HRS,NOC,LLL,UTX,LMT,CW,GD,HII,ARNC,TGI,MRCY,MOG.A,AIR,CUB,NPK,WAIR,ATRO,EGL",

  XHS:"MOH,LPNT,EHC,DPLO,UNH,HUM,LH,HSIC,CI,HCA,AET,DGX,EVHC,PINC,ANTM,ESRX,AMN,SEM,DVA,ACHC,OMI,MCK,UHS,KND,ABC,CYH,MGLN,PDCO,TVTY,MD,CAH,ENSG,PRSC,GTS,USPH,CSU,CCRN,BIOS,CRVL",

  XPH:"JAZZ,MNK,MRK,LLY,AGN,ZTS,PFE,MYL,MDCO,CORT,JNJ,ENDP,PRGO,PCRX,BMY,AKRX,CTLT,HZNP,SUPN,PBH,ZGNX,AERI,NKTR,OMER,DERM,AMRX,LCI,TXMD,MYOK,INVA,COLL,XENT,RVNC,DEPO,ANIP,ACRS,WVE,ITCI,CBAY,PRTK,PAHC,TBPH,AMPH",

  PBJ:"YUM,SHAK,STZ,SYY,KHC,TSN,GIS,MDLZ,BF-B,SAM,USFD,CALM,MGPI,WMK,NOMD,KR,HRL,FLO,PFGC,CAG,PF,ADM,LW,SFM,SEB,SAFM,CVGW,PPC,SJM,UNFI",

  PEJ:"HLT,BKNG,TWX,MAR,YUM,LVS,WYNN,SHAK,EAT,DPZ,BJRI,DENN,WWE,TXRH,BXG,H,BYD,MSG,AMCX,RRR,CHDN,PNK,USFD,PFGC,DAL,JBLU,SKYW,HA,CPA,GRUB",

  ACT:"SAM,STZ,MGPI,ABBV,RICK,BF-B,TPB,MO,CTLT,PM,ABT,BTI,BREW,IMBBY,VCO,CRBP,CCU,DEO,ABEV,VGR,DRI,UVV,HEINY,SMG,INSY,BUD,KNBWY,PDRDY,TAP,AOI,PLAY,BJRI,LVMUY,FMX,BORN"
}

$(function() {

  onLoad();

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
      $chart.append('<div class="chart-container"> <img src=' + arr[i] + ' class="chart" data-border-color="black" /> <input type="checkbox"  name="watchlist" value=' + sym[i].toUpperCase() + '> </div>');
    }

  }

  // on double click change border color to green or black
  $('#charts').on('click', '.chart-container img', function() {
    $this = $(this);

    if($this.attr('data-border-color') === 'black') {
      $this.attr('data-border-color', 'green');
      $this.css('border-color', '#7CFC00');
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


  // ETFS
  $('#etf-scans li a').on('click', function(e) {
    $('#stock-ticker').val('');
    $('#stock-ticker').val(ETF[$(this).attr("data-text")]);
    $('#erase').show();
  });

});

// hide save button, reset values on texbox when page loads
function onLoad() {
  $('#save').hide();
  $('#stock-ticker').val('');
  $('#erase').hide();
}
