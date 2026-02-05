// ======= Loan EMI Calculator =======
function calculateLoanEMI(principal, rate, months) {
    let monthlyRate = rate / 12 / 100;
    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);
    let totalPayment = emi * months;
    let totalInterest = totalPayment - principal;
    return {
        EMI: emi.toFixed(2),
        TotalPayment: totalPayment.toFixed(2),
        TotalInterest: totalInterest.toFixed(2)
    };
}

// ======= Mortgage Calculator =======
function calculateMortgage(principal, rate, years) {
    let months = years * 12;
    return calculateLoanEMI(principal, rate, months);
}

// ======= Salary Calculator =======
function calculateSalary(gross, deductions=0, taxRate=0) {
    let tax = gross * taxRate / 100;
    let net = gross - tax - deductions;
    return {Gross: gross.toFixed(2), Tax: tax.toFixed(2), Net: net.toFixed(2)};
}

// ======= Savings Calculator =======
function calculateSavings(monthly, months, interest=0) {
    let total = 0;
    let monthlyRate = interest / 12 / 100;
    for(let i=0; i<months; i++){
        total = (total + monthly)*(1+monthlyRate);
    }
    return total.toFixed(2);
}

// ======= Compound Interest =======
function calculateCompound(principal, rate, years, times=1) {
    let amount = principal * Math.pow(1 + rate/(100*times), times*years);
    return {Principal: principal.toFixed(2), Amount: amount.toFixed(2), Interest: (amount-principal).toFixed(2)};
}

// ======= Investment Return =======
function calculateInvestment(principal, rate, years) {
    return calculateCompound(principal, rate, years, 1);
}

// ======= Credit Card Payoff =======
function calculateCreditPayoff(balance, monthlyPayment, rate) {
    let monthlyRate = rate / 12 / 100;
    let months = 0;
    let totalPaid = 0;
    let interestPaid = 0;
    while(balance > 0){
        let interest = balance * monthlyRate;
        balance += interest;
        balance -= monthlyPayment;
        totalPaid += monthlyPayment;
        interestPaid += interest;
        months++;
        if(months>600){break;} // 50 years safety break
    }
    return {Months: months, TotalPaid: totalPaid.toFixed(2), InterestPaid: interestPaid.toFixed(2)};
}

// ======= Retirement Calculator =======
function calculateRetirement(currentAge, retireAge, monthlySavings, rate) {
    let years = retireAge - currentAge;
    let monthlyRate = rate / 12 / 100;
    let futureValue = 0;
    for(let i=0; i<years*12; i++){
        futureValue = (futureValue + monthlySavings)*(1+monthlyRate);
    }
    return futureValue.toFixed(2);
}

// ======= Budget Planner =======
function calculateBudget(income, expenses) {
    let totalExpenses = expenses.reduce((a,b)=>a+b,0);
    let balance = income - totalExpenses;
    return {Income: income.toFixed(2), Expenses: totalExpenses.toFixed(2), Balance: balance.toFixed(2)};
}

// ======= Profit Margin =======
function calculateProfitMargin(cost, sellingPrice) {
    let profit = sellingPrice - cost;
    let margin = (profit / sellingPrice) * 100;
    return {Profit: profit.toFixed(2), Margin: margin.toFixed(2)};
}

// ======= Age Calculator =======
function calculateAge(birthDate) {
    let birth = new Date(birthDate);
    let now = new Date();
    let diff = now - birth; // milliseconds
    let ageDate = new Date(diff);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = now.getMonth() - birth.getMonth() + years*12;
    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor(diff / (1000*60*60));
    let minutes = Math.floor(diff / (1000*60));
    let seconds = Math.floor(diff / 1000);
    return {Years: years, Months: months, Days: days, Hours: hours, Minutes: minutes, Seconds: seconds};
}

// ======= BMI Calculator =======
function calculateBMI(weight, height) {
    let bmi = weight / ((height/100)*(height/100));
    let category = "";
    if(bmi < 18.5) category = "Underweight";
    else if(bmi < 24.9) category = "Normal";
    else if(bmi < 29.9) category = "Overweight";
    else category = "Obese";
    return {BMI: bmi.toFixed(2), Category: category};
}

// ======= Export for browser usage =======
window.calc = {
    loanEMI: calculateLoanEMI,
    mortgage: calculateMortgage,
    salary: calculateSalary,
    savings: calculateSavings,
    compound: calculateCompound,
    investment: calculateInvestment,
    creditPayoff: calculateCreditPayoff,
    retirement: calculateRetirement,
    budget: calculateBudget,
    profitMargin: calculateProfitMargin,
    age: calculateAge,
    bmi: calculateBMI
};