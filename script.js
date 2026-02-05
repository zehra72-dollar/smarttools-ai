// Loan EMI
function calcEMI(){
 let P = parseFloat(document.getElementById('loanAmount').value);
 let r = parseFloat(document.getElementById('loanRate').value)/1200;
 let n = parseInt(document.getElementById('loanYears').value)*12;
 if(P && r && n){
 let emi = P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
 document.getElementById('emiResult').innerText = `Monthly EMI: $${emi.toFixed(2)}`;
 } else { document.getElementById('emiResult').innerText="Please fill all fields";}
}

// Mortgage
function calcMortgage(){
 let P = parseFloat(document.getElementById('mortgageAmount').value);
 let r = parseFloat(document.getElementById('mortgageRate').value)/1200;
 let n = parseInt(document.getElementById('mortgageYears').value)*12;
 if(P && r && n){
 let emi = P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
 let total = emi*n;
 document.getElementById('mortgageResult').innerText = `Monthly: $${emi.toFixed(2)}, Total Payment: $${total.toFixed(2)}`;
 } else { document.getElementById('mortgageResult').innerText="Please fill all fields";}
}

// Salary
function calcSalary(){
 let s = parseFloat(document.getElementById('salary').value);
 if(s){ document.getElementById('salaryResult').innerText = `Yearly Salary: $${(s*12).toFixed(2)}`;}
 else {document.getElementById('salaryResult').innerText="Enter salary";}
}

// Savings
function calcSavings(){
 let p = parseFloat(document.getElementById('savingsAmount').value);
 let r = parseFloat(document.getElementById('savingsInterest').value)/100;
 let n = parseInt(document.getElementById('savingsYears').value);
 if(p && r && n){
 let total = p*Math.pow(1+r,n);
 document.getElementById('savingsResult').innerText = `Future Savings: $${total.toFixed(2)}`;
 } else {document.getElementById('savingsResult').innerText="Fill all fields";}
}

// Compound Interest
function calcCompound(){
 let P = parseFloat(document.getElementById('ciPrincipal').value);
 let r = parseFloat(document.getElementById('ciRate').value)/100;
 let n = parseInt(document.getElementById('ciYears').value);
 let f = parseInt(document.getElementById('ciFrequency').value);
 if(P && r && n && f){
 let A = P * Math.pow(1 + r/f, n*f);
 document.getElementById('ciResult').innerText = `Amount after ${n} years: $${A.toFixed(2)}`;
 } else {document.getElementById('ciResult').innerText="Fill all fields";}
}

// Investment Return
function calcInvestment(){
 let amt = parseFloat(document.getElementById('invAmount').value);
 let rate = parseFloat(document.getElementById('invRate').value)/100;
 let years = parseInt(document.getElementById('invYears').value);
 if(amt && rate && years){
 let total = amt*Math.pow(1+rate,years);
 document.getElementById('invResult').innerText = `Expected Return: $${total.toFixed(2)}`;
 } else {document.getElementById('invResult').innerText="Fill all fields";}
}

// Credit Card Payoff
function calcCCPayoff(){
 let bal = parseFloat(document.getElementById('ccBalance').value);
 let rate = parseFloat(document.getElementById('ccRate').value)/1200;
 let pay = parseFloat(document.getElementById('ccPayment').value);
 if(bal && rate && pay){
 let months = Math.log(pay/(pay - bal*rate))/Math.log(1+rate);
 document.getElementById('ccResult').innerText = `Payoff in ${months.toFixed(1)} months`;
 } else {document.getElementById('ccResult').innerText="Fill all fields";}
}

// Retirement
function calcRetirement(){
 let current = parseFloat(document.getElementById('retCurrent').value);
 let monthly = parseFloat(document.getElementById('retMonthly').value);
 let rate = parseFloat(document.getElementById('retRate').value)/100;
 let years = parseInt(document.getElementById('retYears').value);
 if(current && monthly && rate && years){
 let total = current;
 for(let i=0;i<years*12;i++){
 total += monthly;
 total *= (1+rate/12);
 }
 document.getElementById('retResult').innerText = `Projected Retirement Savings: $${total.toFixed(2)}`;
 } else {document.getElementById('retResult').innerText="Fill all fields";}
}

// Budget
function calcBudget(){
 let income = parseFloat(document.getElementById('budgetIncome').value);
 let expense = parseFloat(document.getElementById('budgetExpense').value);
 if(income && expense){
 let save = income - expense;
 document.getElementById('budgetResult').innerText = `Monthly Savings: $${save.toFixed(2)}`;
 } else {document.getElementById('budgetResult').innerText="Fill all fields";}
}

// Profit Margin
function calcProfit(){
 let revenue = parseFloat(document.getElementById('profitRevenue').value);
 let cost = parseFloat(document.getElementById('profitCost').value);
 if(revenue && cost){
 let profit = revenue - cost;
 let margin = profit/revenue*100;
 document.getElementById('profitResult').innerText = `Profit: $${profit.toFixed(2)}, Margin: ${margin.toFixed(2)}%`;
 } else {document.getElementById('profitResult').innerText="Fill all fields";}
}

// Age
function calcAge(){
 let birth = new Date(document.getElementById('birthDate').value);
 if(birth!="Invalid Date"){
 let now = new Date();
 let diff = now - birth;
 let age = diff/(1000*60*60*24*365.25);
 document.getElementById('ageResult').innerText = `Age: ${Math.floor(age)} years (${Math.floor(age*12)} months, ${Math.floor(age*365)} days)`;
 } else {document.getElementById('ageResult').innerText="Select your birth date";}
}

// BMI
function calcBMI(){
 let w = parseFloat(document.getElementById('bmiWeight').value);
 let h = parseFloat(document.getElementById('bmiHeight').value)/100;
 if(w && h){
 let bmi = w/(h*h);
 document.getElementById('bmiResult').innerText = `BMI: ${bmi.toFixed(2)}`;
 } else {document.getElementById('bmiResult').innerText="Fill all fields";}
}