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
 11. [Relative Valuation - DCF with Multiples](#dcfmulti)
 - [Why Use Multiples?](#whymulti)
 - [Types of Multiples](#typemulti)
 - [Finding Comparable Companies](#compcomp)
 - [Widely Used Multiples](#widemulti)
 - [Best Practices](#bestpract)
 12. [Leveraged Buyouts](#levbuyout)
 - [What Is LBO](#lbo)
 - [Phases of LBO](#lbophase)
 - [When is LBO Feasible](#lbofeas)
 - [100 Making Money in LBO](#100lbo)
 - [Lenders in LBO](#lbolend)
 13. [Leveraged Buyout Model](#lbomodel)
 - [Intro to LBO model](#lbointro)
 - [Max Debt](#maxdebt)
 - [Financial Sponsors](#finspon)
 - [Forecast Financials](#lbofinancial)
 - [Optimal Debt Structure](#optdebt)
 - [Estimate Cash Flows & Debt Payments](#lbocf)
 - [Complete Model](#lbocompmod)
 - [Calculate Enterprise Value & IRR](#lboentirr)
 - [Sensitivity Analysis](#lbosens)


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

### Relative Valuation - DCF with Multiples <a name="dcfmulti"></a>
#### Why Use Multiples? <a name="whymulti"></a>
- Comparing assets to others similar assets, like how when you are buying a house, tv, car
- You need to find a few companies that are similar in the industry, size, growth etc...
- Multiples
  - Easy to apply for rough approximation
  - Great way to triangulate DCF results
  - Incorporate market sentiment

<br>

#### Types of Multiples <a name="typemulti"></a>
- Trading & Transaction multiples
  - Trading multiple use the stock price of comparable companies (ex: P/E, P/S, P/BV ratio)
    - easy to update and view
    - incorporate a premium
    - current and up to date
  - Transaction multiple is based on the prices paid in previous transactions (ex: EV/EBITDA)
    - not always up to date
    - average historical acquisition premium paid in the industry

<br>

#### Finding Comparable Companies <a name="compcomp"></a>
- Selecting right peer group
  - Need very similar companies
  - Focus on
    - business model
    - profitability margins
    - growth rate
    - location
    - fixed assets investment
    - size (revs & employees)
    - number of customers
  - Select 8-10 companies
    - must satisfy 5-6 criteria

<br>

#### Widely Used Multiples <a name="widemulti"></a>

<figure>
<img src="/img/posts/valuation/widemulti.png" class="blg-img" alt="Multiples Widley Used">
</figure>

<br>

#### Best Practices <a name="bestpract"></a>
- Every company is different dig deeper
  - look into the financial statements
  - closing period
  - remove one-off income, expenses, other items
  - debt-like items maybe hidden such as legal litigations, pension liabilities, etc..

<br>


### Leveraged Buyouts <a name="levbuyout"></a>
#### What Is LBO <a name="lbo"></a>
- Leveraged Buyouts
  - Highly leveraged M&A deal where debt is main component
  - The Target has a solid underlying business where cash flows are the collateral
  - Equity investors are called financial sponsors they provide capital for deal

<br>

#### Phases of LBO] <a name="lbophase"></a>
- Phase 1
  - Financial sponsors have decided they want to go through transactions so they go to lenders
  - Create an SPV (special purpose vehicle)
  - Sponsors will provide the cash and lenders will provide the debt
- Phase 2
  - Acquiring the target's shares
  - Cash reduces from the SPV and assets (shares) go increase
- Phase 3
  - The SPV is merged with the Target and changes the name to the target's name

<br>

#### When is LBO Feasible <a name="lbofeas"></a>
- Mature companies make a suitable target because their revenues are slowing and have little innovation but their cash flows are enough to pay off debt and pay out as dividends
- Needs solid management team
- Market leadership
- Excess cash
- Non-core assets that can be sold to raise cash
- Low initial leveraged

<br>

#### 100 Making Money in LBO <a name="100lbo"></a>
- Tax shields
  - higher debt means higher interest payments
  - lower taxes due to interest expense
- Strategies for Value Generation
  - Deleverage
    - repay as much of the target's debt and resell company
  - Arbitrage
    - bet that the market conditions will change and the company will be sold at a higher multiple
    - ex: buys at 6 times EBITDA and sell in few years for 7.5 times EBITDA
  - Growth
    - EBITDA increases, which leads to a higher Enterprise Value
    - ex: buy for 6 times EBITDA but earnings grow and sell again for 6 times EBITDA but higher price

<br>

#### Lenders in LBO <a name="lbolend"></a>
- 70% - 75% of acquisition price is paid with debt
- Different terms so the higher the term the first priority you have to claiming assets

<figure>
<img src="/img/posts/valuation/debtstruct.JPG" class="blg-img" alt="">
</figure>

- Payment in kin (PIK) instrument allows financial sponsors to use more debt in LBO transactions
- Mezzanine Loans
  - 50% Debt & 50% Equity
  - Equity - option that can be converted into equity shares (equity bonus)
  - Debt - a loan that needs to be repaid

<br>

### Leveraged Buyout Model <a name="lbomodel"></a>
#### Intro to LBO model <a name="lbointro"></a>
- Full developed models are only used once we have identified the suitable target
- Very time consuming task which takes into account all the transactions costs/details
- Paper LBO modeling give you the general principles
- Screening process (public or private)
  - time consuming and difficult to find company that falls into criteria
- One page vertical models

<figure>
<img src="/img/posts/valuation/lbodetail.JPG" class="blg-img" alt="">
</figure>

- Steps
  - Fill in share price and shares outstanding
  - Multiply share price with shares outstanding to get market cap
  - `Net Debt = Financial Debt - Cash`
  - `Enterprise Value = Market Cap + Net Debt`
  - Enter current EBITDA
  - `EV / EBITDA` multiple
  - Tax rate

<figure>
<img src="/img/posts/valuation/lbotemplate.JPG" class="blg-img" alt="">
</figure>

<br>

#### Max Debt <a name="maxdebt"></a>
- Need to account for the different tranches of debt
- Lenders want to know that the transaction is not too risky
- Couple Methods
  - Forecast cash flows and calculate the amount of debt that can be repaid
  - Use industry standard multiples based on similar deals (quick & preferred at early stage)

<figure>
<img src="/img/posts/valuation/lbotemplate.JPG" class="blg-img" alt="">
</figure>

- Multiply EBITDA by the multiples to get total debt
  - do this for all tranches of debt (A, B, C etc..)
- Sum of the Terms to get total debt

<figure>
<img src="/img/posts/valuation/maxdebt2.JPG" class="blg-img" alt="">
</figure>

- However usually lenders will put restrictions (covenants) on the loans that you will need to adjust for
  - Some covenants are restrictions on dividends and required payments

<figure>
<img src="/img/posts/valuation/maxdebt3.JPG" class="blg-img" alt="">
</figure>

<br>

#### Financial Sponsors <a name="finspon"></a>
- Calculating the acquisition price
  - add in acquisition premium (avg is 30% but check industry)
  - `acquisition price = market cap * (1 + premium)`
    - line "Equity Value with premium"

<figure>
<img src="/img/posts/valuation/acqprem.JPG" class="blg-img" alt="">
</figure>

- Net debt will be refinanced during acquisition
- New `Enterprise Value at acquisition = Equity Value with premium + Existing Net Debt`
- `Equity Needed = Enterprise Value at acquisition - Maximum amount of debt`

<figure>
<img src="/img/posts/valuation/acqprem2.JPG" class="blg-img" alt="">
</figure>


<br>

#### Forecast Financials <a name="lbofinancial"></a>
- The business will run as usual for 5 years or more
  - goal is to grow comapny, increase margins, and improve EBITDA
- Start forecasting at the company's income statement
  - revenue growth %
  - COGS %
  - OPEX %
  - EBITDA %

<figure>
<img src="/img/posts/valuation/forlbo1.JPG" class="blg-img" alt="">
</figure>

- To get next year's revenues you need to multiply current year's revenues with (1 + growth rate)
  - copy formula to the right
- To get next year's COGS multiply the percentage rate to the forecasted revenues
- Do the same for OPEX as you did with COGS
- Gross Profit = Sum of revenues + COGS (negative)
- EBITDA = Gross Profit + OPEX
- D&A = CAPEX spending and is set as constant
- After you calculate EBIT

<figure>
<img src="/img/posts/valuation/forlbo2.JPG" class="blg-img" alt="">
</figure>

<br>

#### Optimal Debt Structure <a name="optdebt"></a>
- Need to include interest expense throughout the years
- Debt Structure
  - calculate all the loans with their corresponding interest rate
  - `Interest Expense = Outstanding loan * Interest Rate`

<figure>
<img src="/img/posts/valuation/optdebt.JPG" class="blg-img" alt="">
</figure>

- Sum all the interest expenses and fill in the interest expense line
- Calculate the EBT = EBIT + Interest Expense
- Taxes = EBT * Tax rate
- Calculate Net Income

<figure>
<img src="/img/posts/valuation/optdebt2.JPG" class="blg-img" alt="">
</figure>

<br>

#### Estimate Cash Flows & Debt Payments <a name="lbocf"></a>
- Amount of debt the target can reduce depends on cash flow it can generate in a year
- Target's minimum loan payments and any other covenants must be taken into account
- Any residual cash flow can be used to reduce other debts or if allowed distributed through dividend
- Calculation
  - Net Income
  - Add back D&A (positive)
  - Subtract change in working capital (% of revenues)
  - Subtract CAPEX (should remain constant)
  - Sum is the cash available for debt payment

<figure>
<img src="/img/posts/valuation/lbocf1.JPG" class="blg-img" alt="">
</figure>

- Fill in loan payments under debt structure

<figure>
<img src="/img/posts/valuation/lbocf2.JPG" class="blg-img" alt="">
</figure>


<br>

#### Complete Model <a name="lbocompmod"></a>
- Interest expense, EBT, Taxes, & Net Income can be copied over to other cells

<figure>
<img src="/img/posts/valuation/lbocom1.JPG" class="blg-img" alt="">
</figure>

- Finish the debt schedule
  - `Outstanding Debt Next Year = Outstanding Debt Prior Year - Debt Repayment`
  - Copy the interest expense rates across
  - Copy the debt repayments
- Finish the Cash Flow calculations

<figure>
<img src="/img/posts/valuation/lbocom2.JPG" class="blg-img" alt="">
</figure>


<br>

#### Calculate Enterprise Value & IRR <a name="lboentirr"></a>
- Once model is complete you can determine if the company is an attractive target
- Debt Structure
  - Get the outstanding term loans A & B as of year 5 or the last year
  - Get the new or same multiple value forecasted at end of year 5
  - Calculate the new implied enterprise value via `ENDING YEAR EBITDA * Multiple`
  - Net Debt = Debt left over from sum of all oustanding loans
  - `Enterprise Value - Net Debt = Equity Value` assuming no cash
- Cash-on-Cash Ratio = Proceeds at exit / Initial Investment
  - used by private equity to see how much times they made from initial investment
  - does not take into account time value of money
- IRR equity
  - Calculate Investor Cash Flows throughout the years
  - Excel's IRR function copy all Investor Cash Flows values

<figure>
<img src="/img/posts/valuation/lobentirr1.JPG" class="blg-img" alt="">
</figure>

<br>

#### Sensitivity Analysis <a name="lbosens"></a>
- Important Variables
  - EV / EBITDA multiple
  - Revenue growth
  - Create a data table
    - horizontal - multiple rate
    - vertical - growth rates
    - base - IRR cell
    - `Data -> WhatIF -> Data Table -> Row (EBITDA multiple) -> Column (Growth rate cell) `

<figure>
<img src="/img/posts/valuation/lbosens1.JPG" class="blg-img" alt="">
</figure>

<br>
