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
 2. [Financial Modeling Fundamentals](#finmodelfun)
 - [Financial Modeling](#finmodelin)
 - [Why Financial Models](#whyfinancial)
 - [Inefficient Financial Modeling](#inefinancial)
 - [Efficient Financial Modeling](#efinancial)
 - [Types of Financial Models](#typefinmodel)
 - [Level of Detail](#lod)
 - [Right Approach Forecasting](#rightfore)
 - [Building Complete Financial Model](#buildfin)
 - [Forecasting Income Statement](#incfor)
 - [Forecasting Balance Sheet](#balfor)
 3. [DCF - Intro](#dcfintro)
 - [DCF Stages](#dcfstages)
 - [DCF Structure](#dcfstruct)
 - [Example Company - Cheeseco](#excompany)


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
  - `WACC = (D / D+E) * kd * (1-t) + (E / D+E) * ke`
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
- `Present Value = Future Value / (1 + WACC)^n`
  - n = number of periods away from present value

<br>

#### Enterprise & Equity Value <a name="enterequity"></a>

<figure>
  <img src="/img/posts/valuation/enterpriseval.png" class="blg-img" alt="Enterprise valuation">
</figure>

<br>

### Financial Modeling Fundamentals <a name="finmodelfun"></a>
#### Financial Modeling <a name="finmodelin"></a>
- Virtual representation of a business
- Logical flow and reasoning vs simple calculation
- Scenario Building
  - Management can play with numbers
  - Build scenarios (best, base, worst case)

<br>

#### Why Financial Models <a name="whyfinancial"></a>
- With financial models the data is interlinked
- You can't just say revenues will increase without specifying costs/cash impact
- Modeling provides 360 view
  - Balance Sheet -> Scenarios -> Profitability -> Cash Flows -> repeat
- Models Answers Questions Such As:
  - When is the firm planning to break-even?
  - How much is the estimated market potential?
  - How much cash does the firm need before its product to market?

<br>

#### Inefficient Financial Modeling <a name="inefinancial"></a>
- Wrong Ways for Modeling
  - Do not write formulas with embedded constants ex: 5% should be reference value `D4 * (1+5%)`
  - Do not split model across multiple workbooks
  - Do not hide columns in your model
  - Avoid calculating items again that have been calculated
  - NEVER submit model that hasn't been checked; double check your work (Asset = Liabilities + OE)
    - add checks below ur model
  - Avoid using current sheet references in formulas
  - Avoid using complicated formulas
  - Don't use too many macros/VBA
  - Don't use different blocks, ex: if year 2018 is in column C have it always in column C

<br>

#### Efficient Financial Modeling <a name="efinancial"></a>
- Accepted Practices
  - Build flexible models (cells should be linked)
  - Use uniform structure across all worksheets
  - Error-Free by inserting checks (confident about numbers in model)
  - Use calculation blocks that are easy to replicate (easy to copy & paste)
  - Include units in header of tables
  - Create printable documents that are organized and look professional

<br>

#### Types of Financial Models <a name="typefinmodel"></a>
- Credit Analysis
  - cash flows
  - borrower's ability to repay
  - quality of guarantees
- Equity Investments
  - valuation
  - find investment opportunities
- M&A
  - analyze synergies
  - calculate standalone value
- LBO
  - calculate cash flows
  - exit multiples
  - calculate IRR
- Project Finance
  - plan cash flow timing
  - calculate IRR for lenders and equity sponsors
- Startup Valuation
  - break-even analysis
  - market potential

<br>

#### Level of Detail <a name="lod"></a>
- Long-term planning
  - Important Drivers
    - Revenues
    - Margins (Gross Profit, EBITDA)
    - Number of employees
    - Capex
    - Working Capital
- Mid-term planning
- Short-term planning
  - line by line forecasting could work

<br>

#### Right Approach Forecasting <a name="rightfore"></a>
- Hockey Stick Effect
  - be consistent with past performance and avoid strong spikes at the beginning of the forecast period
- Industry Outlook
  - study the analysis of industry opinion leaders and plan accordingly
  - read expert opinions and forecasts
- Play With Numbers
  - take close look at the numbers and see if there is something that looks strange
  - build hypothesis
- Stage of Development
  - build a forecast that takes into account the stage of development of the firm (startup, growth, or mature business)

<br>

#### Building Complete Financial Model <a name="buildfin"></a>
- P&L
  - tells how firm has performed and if it is profitable
  - items effect BS & CF statements
- Balance Sheet
  - shows assets and debt
- Cash Flow
  - how much cash was made
  - feeds the balance sheet
- Relationships Between P&L & Balance Sheet
  - Revenues & Trade receivables
  - COGS & Trade payables
  - D&A & Fixed assets
  - Interest expenses & Financial liabilities
  - Net Income & Equity
  - Other more...
- Relationships Between Cash Flow & Balance Sheet
  - Net Cash Flow: The amount of cash that came in within a given year
  - BS: Beginning Cash (BS) + Net Cash Flow (CF) = Ending Cash (BS)

<br>

#### Forecasting Income Statement <a name="incfor"></a>
- Revenues
  - The sales forecast is the most important task when forecasting financials
  - Top-down approach
    - general idea based on top-level view
    - Total Market Size * Market Share = Revenues
    - Blend of: Industry Insight, Past Performance, Macro Trends
  - Bottom-up approach
    - consider all small details adding up to a total figure
    - ex: at product level
      - Sales of A + B + C = Revenues
    - number of unknowns increases further out
- Analyst Research
  - Leverage research by analysts who closely follow the company and the industry
- Past Performace
  - Using past evidence as a forecast of the future
- Forecasting COGS & Opex
  - COGS
    - costs related to the production process
    - frequently modeled as a percentage of revenues
  - Opex
    - costs related to selling, general, and admin expenses
    - frequently modeled as a percentage of revenues
  - D&A
    - closely linked to fixed assets
    - usually modeled in a fixed asset roll forward schedule (need to make new schedule)
  - Interest Expense
    - closely linked to financial liabilities
    - usually modeled in a debt schedule
  - Taxes
    - EBT * Statutory tax rate = Taxes

<br>

#### Forecasting Balance Sheet <a name="balfor"></a>
- Working Capital
  - Consists of Trade Receivables, Inventory, and Trade Payables
  - Forecasted using  the `Days` technique
    - `DSO = Trade Receivables / Revenue * 360`
    - `DIO = Inventory / COGS * 360`
    - `DPO = Trade Payables / COGS * 360`
  - Forecast average number of days
    - `Trade Receivables = (DSO * Revenues) / 360`
    - `Inventory = (DIO * COGS) / 360`
    - `Trade Payables = (DPO * COGS) / 360`
- Other Assets & Liabilities
  - Generic categories grouping smaller items
  - Modeled as a percentage of revenues
- Property, Plant & Equipment (PPE)
  - Group of fixed assets used in production or administration
  - Cars, machines, computers etc...
  - D&A reduces the value of PP&E
  - Firms invest in new assets which are listed in Capex
  - `Beginning PP&E - D&A + Capex = Ending PP&E`
  - Some make new schedules or use % of revenues
- Financial Liabilities
  - Modeling financial liabilities depends on the type of facilities used by the company
  - `Beginning Debt + New Debt - Debt Repayment = Ending Debt`
  - Or calculate historical interest rate `Interest Expense / Financial Liabilities = Interest Rate`
- Equity Schedule: `Beginning Equity + Increase of capital +/- Net Income (loss) - Dividend Payments = Ending Equity`
  - Beginning Equity is ending equity of the previous period
  - Increase of capital forecast as 0 as it is tough to calculate
  - Net Income linked to P&L
  - Dividend is modeled as % of firm's FCF
- Cash
  - `Beginning Cash +/- Net Cash Flow = Ending Cash`
    - Net cash flow can be found on bottom of Cash Flow Statement
- CHECK: Assets = Liabilities + Owners Equity

<br>

### DCF - Introduction <a name="dcfintro"></a>
#### DCF Stages <a name="dcfstages"></a>

<figure>
  <img src="/img/posts/valuation/framework.jpg" class="blg-img" alt="valuation framework">
</figure>

<br>

#### DCF Structure <a name="dcfstruct"></a>

<figure>
  <img src="/img/posts/valuation/plassum.jpg" class="blg-img" alt="P&L Assumption">
  <figcaption>P&L assumption tab will have 3 scenarios. Render in output tab.</figcaption>
</figure>

<figure>
  <img src="/img/posts/valuation/bsassum.jpg" class="blg-img" alt="BS Assumption">
  <figcaption>Balance sheet items grow inline with buisness no need for scenarios. Render in output tab.</figcaption>
</figure>

<figure>
  <img src="/img/posts/valuation/cashflow.jpg" class="blg-img" alt="Cash Flow">
  <figcaption>Cash Flow inputs will come from P&L & BS tab</figcaption>
</figure>

<figure>
  <img src="/img/posts/valuation/dcfval.jpg" class="blg-img" alt="DCF Valuation Tab">
  <figcaption>DCF valuation tab is where calculation will be performed</figcaption>
</figure>

- Data source tabs will be where to put the company's historical financial data


<br>

#### Example Company - Cheeseco <a name="excompany"></a>

<figure>
  <img src="/img/posts/valuation/cheeseco.jpg" class="blg-img" alt="Cheese Company Analysis">
</figure>

<br>
