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
 4. [DCF - Forecasting P&L Items](#forpl)
 - [Modeling Top Line](#modtop)
 - [Flexible Excel Models](#flexmod)
 - [Other Revenues & COGS](#revcogmod)
 - [Operating Expense & D&A](#opexda)
 - [Other Items & Interest Expense](#othritem)
 5. [DCF - Forecasting Balance Sheet Items](#forbal)
 - [Modeling Balance Sheet](#modelbal)
 - [Concept for Finance Practitioners](#confin)
 - [Days Calculation](#daycalc)
 - [Days to Forecast Future](#fordays)
 - [Property Plant & Equipment, Other Assets, Other Liabilities](#ppeasset)
 6. [DCF - Clean Output Sheets](#cleanout)
 - [Excel Practice on Clean Output](#excleanout)
 - [Applying Practice P&L](#applypl)
 - [Clean Output Balance Sheet](#cleanbal)
 - [Output Balance Sheet Historical Data](#outbshis)
 7. [DCF - Unlevered Cash Flows & Net Cash Flow](#ufcf)
 - [Unlevered Free Cash Flow Calculation](#fcfcalc)
 - [Reconcile UFCF to Net Cash Flow](#netcf)
 - [Cash Flow Calculation](#cfcalc)
 - [Arrive Net Cash](#netcash)
 - [Multiple Cell Reference Modification](#multicell)
 8. [DCF - Calculate Present Value of Cash Flows](#calcpv)
 - [Weighted Average Cost of Capital (WACC)](#calcwacc)
 9. [DCF - Calculating Continuing Value Enterprise & Equity Value](#enterequval)
 - [Calculating Continuing Value & Enterprise Value](#enterval)
 - [Final Steps Equity Value](#finequity)
 10. [DCF - Additional Analysis to Financial Model](#analysisfin)
 - [Sensitivity For WACC & Perpetuity Growth](#senwacc)
 - [Goal Seek](#goalseek)
 - [Financial Model Chart](#finchart)


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
  <img src="/img/posts/valuation/framework.JPG" class="blg-img" alt="valuation framework">
</figure>

<br>

#### DCF Structure <a name="dcfstruct"></a>

<figure>
  <img src="/img/posts/valuation/plassum.JPG" class="blg-img" alt="P&L Assumption">
  <figcaption>P&L assumption tab will have 3 scenarios. Render in output tab.</figcaption>
</figure>

<figure>
  <img src="/img/posts/valuation/bsassum.JPG" class="blg-img" alt="BS Assumption">
  <figcaption>Balance sheet items grow inline with buisness no need for scenarios. Render in output tab.</figcaption>
</figure>

<figure>
  <img src="/img/posts/valuation/cashflow.JPG" class="blg-img" alt="Cash Flow">
  <figcaption>Cash Flow inputs will come from P&L & BS tab</figcaption>
</figure>

<figure>
  <img src="/img/posts/valuation/dcfval.JPG" class="blg-img" alt="DCF Valuation Tab">
  <figcaption>DCF valuation tab is where calculation will be performed</figcaption>
</figure>

- Data source tabs will be where to put the company's historical financial data


<br>

#### Example Company - Cheeseco <a name="excompany"></a>

<figure>
  <img src="/img/posts/valuation/cheeseco.JPG" class="blg-img" alt="Cheese Company Analysis">
</figure>

<br>

### DCF - Forecasting P&L Items <a name="excompany"></a>
#### Modeling Top Line <a name="modtop"></a>
- P&L assumptions tab
  - Create button for selected case where you will have 3 different scenarios (optimistic, base, worst)
  - Optomistic - better than historical growth of revenues
  - Base - historical growth of revenues
  - Worst - marginal growth of revenues
- P&L Top Line
  - Revenues for past 3 years use `P&L source` sheet to copy the data over (you may want to link all the other lines too)
  - Under revenues plot the YoY (year over year) growth rate %
    - calculate `(this year revenue / last years revenue) - 1`
  - Below YoY line put the three case scenarios `Case 1`, `Case 2`, `Case 3`
    - put pattern style on unused cells `highlight cells -> right click -> format cell -> Fill -> select pattern style`
    - for each case calculate growth rate per year and for base case use historical average growth rate

<figure>
  <img src="/img/posts/valuation/plmodtop.JPG" class="blg-img" alt="Modeling Revenue">
</figure>

<br>

#### Flexible Excel Models <a name="flexmod"></a>
- `Choose` allows you to build a dynamic model
  - in excel formula type `=+CHOOSE(selected_case_value, value1, value2, value3 etc..)`
- Calculate the forecasted revenue based on growth rate
  - `Revenues this year = (Last year revenues) x (1 + YoY growth rate of revs)`

<figure>
  <img src="/img/posts/valuation/choose.JPG" class="blg-img" alt="Modeling Revenue">
</figure>

<figure>
  <img src="/img/posts/valuation/revforcast.JPG" class="blg-img" alt="Modeling Revenue">
</figure>

<br>

#### Other Revenues & COGS <a name="revcogmod"></a>
- Copy the choose function parameters line from YoY revenues growth to copy formulas to each P&L line
- Other revenues could be operating or non-operating so use flat rate for each scenario
- COGS is sum or raw materials + direct costs and will develop in line with revenues
  - use a percentage weight: `(Revenues for the year) * (COGS % of Revenues)`

<figure>
  <img src="/img/posts/valuation/COGS.JPG" class="blg-img" alt="Other revenues and COGS">
</figure>

<br>

#### Operating Expense & D&A <a name="opexda"></a>
- Model them as a % of revenues as they are dependent on the amount of revenue
- Use the row from COGS (needs to be fixed) and copy onto Opex and D&A
- For each Opex case model the % of cost
  - you can then copy the COGS line onto the Opex line
- Follow the same steps above for D&A

<br>

#### Other Items & Interest Expense] <a name="othritem"></a>
- Interest expense depend on financial structure of firm
  - assuming company would not incur further debt then IE can be set as flat
  - copy the formula for revenues line and paste onto IE
- Extraordinary items cannot be predicted
  - copy the ready formula for an item modeled as a % of revenues
- Taxes
  - optimistic take lowest historical tax rate
  - base take tax rate in region or corporate
  - worst take highest historical tax rate

<figure>
  <img src="/img/posts/valuation/otherexp.JPG" class="blg-img" alt="Other expenses">
</figure>

- Double check and see that when changing scenario the numbers change

<br>

### DCF - Forecasting Balance Sheet Items <a name="forbal"></a>
#### Modeling Balance Sheet <a name="modelbal"></a>
- Trade Receivables, Payables, and Inventory will be forecasted via `Days` technique
- PP&E, Other Assets & Liabilities will be % of revenue

<figure>
  <img src="/img/posts/valuation/bsforecast.JPG" class="blg-img" alt="Balance Sheet Template">
</figure>

<br>

#### Concept for Finance Practitioners <a name="confin"></a>
- Lower DSO number say on accounts receivable means that a company receives payment quickly
- DIO number tells how long it takes on average a company to convert inventory into cash

<figure>
  <img src="/img/posts/valuation/daysmethod.JPG" class="blg-img" alt="Balance Sheet Template">
</figure>

<br>

#### Days Calculation <a name="daycalc"></a>
- `DSO = (Trade Receivables / Revenues) * 360`
- `DPO = (Trade Payable / COGS) * 360` use `-` to make positive
- `DIO = (Inventory / COGS) * 360`
- tip: fix row reference using `$` sign in excel

<figure>
  <img src="/img/posts/valuation/dayscalculation.JPG" class="blg-img" alt="Balance Sheet Template">
</figure>

<br>

#### Days to Forecast Future <a name="fordays"></a>
- Two ways to calculate AR, AP, and Inventory
  - 1. average amount of days observed in historical
  - 2. latest number in FY year (USE this method)
- For deeper analysis look into by DSO, DPO, DIO either increased or decreased if they did
- When forecasting you must reverse the calculations done on historical data for DSO, DPO and DIO
  - `Trade Receivable = (DSO * Revenues) / 360`
  - `Trade Payable = (DPO * COGS) / 360`
  - `Trade Inventory = (DIO * COGS) / 360`

<figure>
  <img src="/img/posts/valuation/tradecalcs.JPG" class="blg-img" alt="Calculate Trade AR, AP and Inventory">
</figure>

<br>

#### Property Plant & Equipment, Other Assets, Other Liabilities <a name="ppeasset"></a>
- To find historical value just divide amount of PPE with the amount of revenues for that year (fix row)
  - fix row and copy for other assets and other liabilities
- Other liabilities can include extra items from source balance sheet such as: other liabilities, deferred tax, provisions for retirement benefits etc..
- For forecasting you can take the average and use that value across all years (fix column)

<figure>
  <img src="/img/posts/valuation/ppecalc.JPG" class="blg-img" alt="Calculate PPE Other Assets & Liabilities">
</figure>

<br>


### DCF - Clean Output Sheets <a name="cleanout"></a>
#### Excel Practice on Clean Output <a name="excleanout"></a>
- Before calculating the cash flows you need to make a clean sheet of P&L & Balance Sheet
- The clean sheet will display a clean output for use and printing
- Copy total and subtotals and fill entire sheet

<figure>
  <img src="/img/posts/valuation/plclean.JPG" class="blg-img" alt="Clean P&L sheet">
</figure>

<br>

#### Applying Practice P&L <a name="applypl"></a>
- Since the clean P&L output has the same item lines as the forecasted P&L use the `SUMIF` excel function to transfer the numbers
- `+SUMIF(COLUMN CRITERIA, SELECT LOOKUP & FIX COLUMN CELL, CELL TO PLACE DATA)`
  - you can then paste formula for all items except taxes
  - use `Paste Speical - Formulas` shortcut `ALT + E + S + F`
- Taxes link to P&L line in historical figures and calculate tax rate in clean output sheet by dividing taxes on EBT
- Forecasting tax you just multiply the number by revenue line

<figure>
<img src="/img/posts/valuation/plclean2.JPG" class="blg-img" alt="Clean P&L sheet">
</figure>

<br>

#### Clean Output Balance Sheet <a name="cleanbal"></a>
- Just like with P&L you can use the `SUMIF` function to fill in the data

<figure>
<img src="/img/posts/valuation/bsclean.JPG" class="blg-img" alt="Clean BS sheet">
</figure>

<br>

#### Output Balance Sheet Historical Data <a name="outbshis"></a>
- For the other accounts first link them to their historical values in the BS source
- Consolidate any liabilities into one
- Have a check box below and remember TA = TL + OE
- Forecasting BS
  - Intangible Assets leave as flat (unknown future)
  - Financial Assets leave as flat (unknown future)
  - Cash + Cash Equivalents (Opening Cash + Net Cash Flow) calculate later
  - Financial Liabilities leave as flat unless known
  - Shareholders' equity is `Equity = Opening Equity + Net Income - Dividends`

<figure>
<img src="/img/posts/valuation/bsclean2.JPG" class="blg-img" alt="Clean BS sheet">
</figure>


<br>

### DCF - Unlevered Cash Flows & Net Cash Flow <a name="ufcf"></a>
#### Unlevered Free Cash Flow Calculation <a name="fcfcalc"></a>
- Two ways to to calculate cash flow
  - Levered Cash Flow - considering financial structure of firm
  - Unlevered Cash Flow - independently away from financial structure of firm
- Operating taxes are calculated as a percentage of EBIT
  - NOPAT is EBIT - Taxes
- Add-back D&A
  - Come to Gross Cash Flow
- Next, add in items Inventory, Trade Receivables, Trade Payables
  - Sum to get investments in working capital
  - investments in other assets/liabilities
- Capex, Other Investments, and Extraordinary Items
- After all of that you will now have Unlevered Free Cash Flow

<figure>
<img src="/img/posts/valuation/cashflowunl.JPG" class="blg-img" alt="Cash Flow Statment">
</figure>


#### Reconcile UFCF to Net Cash Flow <a name="netcf"></a>
- After UFCF add
  - Interest Expense
  - Delta Taxes vs Operating Taxes (lower taxes due to deduction of interest expense)
  - Delta Financial liabilities
  - Delta Equity incl. dividends

<figure>
<img src="/img/posts/valuation/ufcftonet.JPG" class="blg-img" alt="Cash Flow Statment">
</figure>


#### Cash Flow Calculation <a name="cfcalc"></a>
- First link the EBIT numbers from output-P&L sheet
- Next select operating tax rate from output-P&L sheet (calculated)
- Add back depreciation after NOPAT
- Adjust for all BS items that effected cash
  - asset increase = cash outflow (-)
  - asset decreased = cash inflow (+)
  - liabilities increased = cash inflow (+)
  - liabilities decreased = cash outflow (-)
  - Use balance sheet to see the change between the years
    - do this for trade AR, AP, Inventory
    - total of these three items is investments in working capital
- Next is Capex (in order to obtain amount of capex during the given year you have to take into account D&A)
- Next is other investments & extraordinary items
- UFCF = `Gross Cash Flow + Investments in WC + Investments in Other assets/liabilities + Capex + Other Investments + Extraordinary Items`

<figure>
<img src="/img/posts/valuation/cashflowcalculation.JPG" class="blg-img" alt="Cash Flow Statment">
</figure>

<br>

#### Arrive Net Cash <a name="netcash"></a>
- Grab interest expense from the "actual" in P&L sheet
- Find the difference between taxes paid go and take from P&L sheet of actual taxes paid and subtract by theoretical operating taxes
- Record actual financial liabilities from BS
- Shareholders equity calculation = `Opening equity + Net Income for year - Dividends`
  - Take into account the closing amount for previous and current year and subtract that amount from net income
- Below Net Cash Flow line add line items
  - Opening cash
  - Closing cash
  - Opening Cash + Net Cash Flow for year = Closing Cash
    - Closing cash needs to = Cash on balance sheet

<figure>
<img src="/img/posts/valuation/netcashflow.JPG" class="blg-img" alt="Net Cash Flows">
</figure>

<br>

#### Multiple Cell Reference Modification <a name="multicell"></a>
- Fill in the rest of the table and periods as you can copy and paste formula in each
- On Ouput sheet fill in the cash and equivalents
  - make sure in the check area you balance to 0
- Empty column F enters in the Cash Flow Calculation instead of E use `Find + Replace`
  - We want to replace the references of F with references of E
  - once done copy over next column and repeat `Find + Replace`

<figure>
<img src="/img/posts/valuation/findnreplace.JPG" class="blg-img" alt="">
</figure>

<figure>
<img src="/img/posts/valuation/findnreplace2.JPG" class="blg-img" alt="">
</figure>

<br>

### DCF - Calculate Present Value of Cash Flows <a name="calcpv"></a>
#### Weighted Average Cost of Capital (WACC) <a name="calcwacc"></a>
- Two key inputs needed WACC & Perpetuity Growth
  - WACC is the cost at which investors are willing to finance the company
  - Perpetuity growth rate (g) is the pace at which the company's revenues would grow after forecast period

<figure>
<img src="/img/posts/valuation/dcfinputs.JPG" class="blg-img" alt="">
</figure>

- Calculate the DCF by using the formula **MISSING VIDEO**

<figure>
<img src="/img/posts/valuation/dcfufcf.JPG" class="blg-img" alt="">
</figure>

<br>

### DCF - Calculating Continuing Value Enterprise & Equity Value <a name="enterequval"></a>
#### Calculating Continuing Value & Enterprise Value <a name="enterval"></a>
- Sum the total of `PV of Cash Flows`
- Use the continuing value formula
  - `Continuing Value = (UFCFt * (1 + g)) /  WACC - g`
  - To obtain PV of cash flows take continuing value and multiply it by `discount factor`

<figure>
<img src="/img/posts/valuation/calccontinue.JPG" class="blg-img" alt="">
</figure>

<br>

#### Final Steps Equity Value <a name="finequity"></a>
- Enterprise Value - Financial Liabilities + Cash + Value of non-operating assets = Equity Value
  - get values from the Balance Sheet

<figure>
<img src="/img/posts/valuation/equityvalue.JPG" class="blg-img" alt="">
</figure>

<br>

### DCF - Additional Analysis to Financial Model <a name="analysisfin"></a>
#### Sensitivity For WACC & Perpetuity Growth <a name="senwacc"></a>
- Sensitivity analysis allows you to quickly test different scenarios
- Create a data table to do this
  - link a cell to the Enterprise Value
  - next to it put different WACC rates
  - below the copied EV type the different growth (g) rate
  - `Data` tab and then `What-If Analysis` -> `Data Table`
    - Row cell is WACC
    - Column cell is g

<figure>
<img src="/img/posts/valuation/sensitiva.JPG" class="blg-img" alt="">
</figure>

<br>

#### Goal Seek <a name="goalseek"></a>
- Use goal seek to find specific value
  - `Data` -> `What-If` -> `Goal Seek`
  - Set cell, the value to find, and last what value to change to find it (WACC)

<figure>
<img src="/img/posts/valuation/goalseek.JPG" class="blg-img" alt="">
</figure>


<br>

#### Financial Model Chart <a name="finchart"></a>
- It is best to create visual representation of your data by using charts

<figure>
<img src="/img/posts/valuation/revebitda.JPG" class="blg-img" alt="">
</figure>

<figure>
<img src="/img/posts/valuation/chartfcf.JPG" class="blg-img" alt="">
</figure>

<figure>
<img src="/img/posts/valuation/chartbridge.JPG" class="blg-img" alt="">
</figure>

<figure>
<img src="/img/posts/valuation/chartwc.JPG" class="blg-img" alt="">
</figure>

<figure>
<img src="/img/posts/valuation/chartdonut.JPG" class="blg-img" alt="">
</figure>

<br>
