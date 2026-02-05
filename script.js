// === 12 High RPM Calculators ===

// Utility to calculate time breakdown
function breakdownTime(days) {
    const years = Math.floor(days/365);
    const months = Math.floor((days%365)/30);
    const remainingDays = days - (years*365 + months*30);
    const hours = remainingDays * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    return {years, months, days: remainingDays, hours, minutes, seconds};
}

// Loan EMI Calculator
function loanEMI() {
    const principal = parseFloat(document.getElementById('loanPrincipal').value);
    const rate = parseFloat(document.getElementById('loanRate').value)/100/12;
    const term = parseFloat(document.getElementById('loanTerm').value)*12;
    const emi = (principal*rate*Math.pow(1+rate,term))/(Math.pow(1+rate,term)-1);
    const total = emi*term;
    const interest = total-principal;
    document.getElementById('loanResult').innerHTML =
    `<div class="result-box">
     EMI: ${emi.toFixed(2)}<br>
     Total Interest: ${interest.toFixed(2)}<br>
     Total Payment: ${total.toFixed(2)}
     </div>`;
}

// Compound Interest Calculator
function compoundInterest() {
    const principal = parseFloat(document.getElementById('ciPrincipal').value);
    const rate = parseFloat(document.getElementById('ciRate').value)/100;
    const times = parseFloat(document.getElementById('ciTimes').value);
    const years = parseFloat(document.getElementById('ciYears').value);
    const amount = principal * Math.pow(1 + rate/times, times*years);
    const interest = amount-principal;
    document.getElementById('ciResult').innerHTML =
    `<div class="result-box">
     Total Amount: ${amount.toFixed(2)}<br>
     Interest Earned: ${interest.toFixed(2)}
     </div>`;
}

// BMI Calculator
function bmiCalculator() {
    const weight = parseFloat(document.getElementById('bmiWeight').value);
    const height = parseFloat(document.getElementById('bmiHeight').value)/100;
    const bmi = weight / (height*height);
    document.getElementById('bmiResult').innerHTML =
    `<div class="result-box">Your BMI: ${bmi.toFixed(2)}</div>`;
}

// Age Calculator
function ageCalculator() {
    const dob = new Date(document.getElementById('ageDOB').value);
    const today = new Date();
    const diffTime = today - dob;
    const diffDays = Math.floor(diffTime / (1000*60*60*24));
    const breakdown = breakdownTime(diffDays);
    document.getElementById('ageResult').innerHTML =
    `<div class="result-box">
     Age: ${breakdown.years} years, ${breakdown.months} months, ${breakdown.days} days<br>
     Hours: ${breakdown.hours} | Minutes: ${breakdown.minutes} | Seconds: ${breakdown.seconds}
     </div>`;
}

// Salary Calculator
function salaryCalculator() {
    const monthly = parseFloat(document.getElementById('salaryMonthly').value);
    const annual = monthly*12;
    const weekly = monthly*12/52;
    const daily = monthly*12/365;
    document.getElementById('salaryResult').innerHTML =
    `<div class="result-box">
     Annual Salary: ${annual.toFixed(2)}<br>
     Weekly Salary: ${weekly.toFixed(2)}<br>
     Daily Salary: ${daily.toFixed(2)}
     </div>`;
}

// Savings Calculator
function savingsCalculator() {
    const principal = parseFloat(document.getElementById('savingsPrincipal').value);
    const monthly = parseFloat(document.getElementById('savingsMonthly').value);
    const rate = parseFloat(document.getElementById('savingsRate').value)/100/12;
    const months = parseFloat(document.getElementById('savingsMonths').value);
    let total = principal;
    for(let i=0;i<months;i++){
        total = (total+monthly)*(1+rate);
    }
    document.getElementById('savingsResult').innerHTML =
    `<div class="result-box">Total Savings: ${total.toFixed(2)}</div>`;
}

// Profit Margin Calculator
function profitMargin() {
    const cost = parseFloat(document.getElementById('pmCost').value);
    const revenue = parseFloat(document.getElementById('pmRevenue').value);
    const profit = revenue-cost;
    const margin = (profit/revenue)*100;
    document.getElementById('pmResult').innerHTML =
    `<div class="result-box">
     Profit: ${profit.toFixed(2)}<br>
     Margin: ${margin.toFixed(2)}%
     </div>`;
}

// Retirement Calculator
function retirementCalculator() {
    const currentAge = parseInt(document.getElementById('retAge').value);
    const retirementAge = parseInt(document.getElementById('retTarget').value);
    const yearsLeft = retirementAge-currentAge;
    const daysLeft = yearsLeft*365;
    const breakdown = breakdownTime(daysLeft);
    document.getElementById('retResult').innerHTML =
    `<div class="result-box">
     Years Left: ${breakdown.years} | Months: ${breakdown.months} | Days: ${breakdown.days}
     </div>`;
}

// Credit Card Payoff
function creditCardPayoff() {
    const balance = parseFloat(document.getElementById('ccBalance').value);
    const rate = parseFloat(document.getElementById('ccRate').value)/100/12;
    const payment = parseFloat(document.getElementById('ccPayment').value);
    const months = Math.ceil(Math.log(payment/(payment-balance*rate))/Math.log(1+rate));
    document.getElementById('ccResult').innerHTML =
    `<div class="result-box">Months to Payoff: ${months}</div>`;
}

// Mortgage Calculator
function mortgageCalculator() {
    const principal = parseFloat(document.getElementById('mortgagePrincipal').value);
    const rate = parseFloat(document.getElementById('mortgageRate').value)/100/12;
    const term = parseFloat(document.getElementById('mortgageTerm').value)*12;
    const emi = (principal*rate*Math.pow(1+rate,term))/(Math.pow(1+rate,term)-1);
    const total = emi*term;
    document.getElementById('mortgageResult').innerHTML =
    `<div class="result-box">
     EMI: ${emi.toFixed(2)}<br>
     Total Payment: ${total.toFixed(2)}
     </div>`;
}

// Investment Return
function investmentReturn() {
    const principal = parseFloat(document.getElementById('invPrincipal').value);
    const rate = parseFloat(document.getElementById('invRate').value)/100;
    const years = parseFloat(document.getElementById('invYears').value);
    const futureValue = principal * Math.pow(1+rate, years);
    document.getElementById('invResult').innerHTML =
    `<div class="result-box">Future Value: ${futureValue.toFixed(2)}</div>`;
}