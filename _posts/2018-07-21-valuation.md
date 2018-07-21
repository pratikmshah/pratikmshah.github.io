---
title:  "Valuation"
date:   2018-07-18
image: "/valuation/valuation.jpeg"
---
This blog post is a continuation of notes from my previous post on investment banking. This post will contain notes on company valuations, financial modeling using the DCF method, and leverage buyouts(LBO).

<br>

### Table of Contents
 1. [Guide To Company Valuation](#valuation)
 - [Why Value a Company?](#whyval)
 - [Company Worth To Investor](#cotoinvest)
 - [Two Variables For Firm's Value](#twovar)
 - [Unlevered Cash Flow](#uncashflow)
 - [Discount Factor For WACC](#discwacc)
 - [Cost of Debt](#cod)
 - [Cost of Equity](#coeq)
 - [Future Cash Flow Estimate](#cashflowfut)
 - [Two Stages DCF Model](#twodcf)
 - [Discount Cash Flow & Terminal Value](#disccash)
 - [Enterprise & Equity Value](#enterequity)
 2. [](#)
 - [](#)
 - [](#)
 - [](#)
 - [](#)
 - [](#)


<br>

### Guide To Company Valuation <a name="valuation"></a>
#### Why Value a Company? <a name="whyval"></a>
- Reasons to Value?
  - M&A
  - Subsidiary sales
  - Start-up investments
  - Join ventures
  - IPOs
  - Delistings

<br>

#### Company Worth To Investor <a name="cotoinvest"></a>
- You buy/invest to make money
- If you buy stock of a mature company on the market you expect the value to appreciate over the coming years and along the way collect the dividends
- Three Variable When Buying
  - Purchase Price
  - Dividends
  - Selling Price
- Price of a stock today depends on future dividends the stock is expected to pay (revenue growth)
- Cash flow generation is main force that determines dividends growth

<br>

#### Two Variables For Firm's Value <a name="twovar"></a>
- Growth & Profitability drives company value
- Operating Cash Flow = Revenues - Expenses - Investments
  - what is left over is cash conversion generation
- improve cash flows by
  - growing revenues
  - reducing costs

<br>

#### Unlevered Cash Flow <a name="uncashflow"></a>

<figure>
  <img src="/img/posts/valuation/cashflow.png" class="blg-img" alt="Unlevered Cash Flow Calc">
</figure>

<figure>
  <img src="/img/posts/valuation/cashmove.JPG" class="blg-img" alt="What moves cash">
</figure>

<br>

#### Discount Factor For WACC <a name="discwacc"></a>
- Time value of money means a dollar today is worth more than a dollar tomorrow
- Discount Factor
  - helps determine present value of future cashflows
  - the discount factor reflects the type of cash flow to be discounted
    - Cash Flows available only to Equity holders -> Cost of Equity
    - Cash Flows available to Equity & Debt Holders -> Weighted Average Cost of Capital (WACC)
- Weighted Average Cost of Capital
  - WACC = (D / D+E) * kd * (1-t) + (E / D+E) * ke
  - D = Debt
  - E = Equity
  - t = Taxes
  - kd = Cost of Debt
  - ke = Cost of Equity

<br>

#### Cost of Debt <a name="cod"></a>
- Cost of Debt
  - average interest rate paid on a company's debt
  - use financial statements (balance sheet * income statement)
    - balance sheet: short + long term debt
    - income statement: interest expense
  - Cost of Debt = Interest Expense / Financial Liabilities

<br>

#### Cost of Equity <a name="coeq"></a>
- Many ways to calculate but CAPM(Capital Assets Pricing Model) is widely used

<figure>
  <img src="/img/posts/valuation/CAPM.jpg" class="blg-img" alt="CAPM formula">
</figure>

- Risk-free Rate is rate of return on investment with zero risk
  - 10 year government bond
- Beta is the volatility of security on the market
  - Less than 1 is less volatile than the market
  - Equal to 1 is volatile as the market
  - Greater than 1 is more volatile than the market
- Market Risk Premium
  - difference between expected return on a market portfolio and risk-free rate
  - most use 5% in their calculations

<figure>
  <img src="/img/posts/valuation/coeexample.JPG" class="blg-img" alt="Cost of equity example">
</figure>

<br>

#### Future Cash Flow Estimate <a name="cashflowfut"></a>
- Projecting Cash Flows
  - 5 - 10 years should be used
  - 5 years for older company that is already mature
  - 10 years for young company with a growing business
- Forecasting P&L and Balance Sheet line items

<figure>
  <img src="/img/posts/valuation/incomefor.JPG" class="blg-img" alt="income statement items forecast">
</figure>

<figure>
  <img src="/img/posts/valuation/balancefor.JPG" class="blg-img" alt="balance sheet items forecast">
</figure>

<br>

#### Two Stages DCF Model <a name="twodcf"></a>
- Difficult to predict future projections
- During middle year of forecast company has
  - stable cash flows
  - lower growth

<figure>
  <img src="/img/posts/valuation/terminalval.JPG" class="blg-img" alt="terminal value formula">
</figure>

<br>

#### Discount Cash Flow & Terminal Value <a name="disccash"></a>
- To calculate present value discount all projected cash flows with company's WACC
- Present Value = Future Value / (1 + WACC)^n
  - n = number of periods away from present value

<br>

#### Enterprise & Equity Value <a name="enterequity"></a>

<figure>
  <img src="/img/posts/valuation/enterpriseval.png" class="blg-img" alt="Enterprise valuation">
</figure>

<br>
