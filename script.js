function calculateAge(){
let dob = new Date(document.getElementById('dob').value);
let diff = Date.now() - dob.getTime();
let age = new Date(diff);
document.getElementById('ageResult').innerText =
"Your age is " + Math.abs(age.getUTCFullYear()-1970) + " years.";
}

function calculateBMI(){
let w = document.getElementById('weight').value;
let h = document.getElementById('height').value/100;
let bmi = (w/(h*h)).toFixed(1);
document.getElementById('bmiResult').innerText = "Your BMI is " + bmi;
}

function calculateLoan(){
let P=document.getElementById('loanAmount').value;
let r=document.getElementById('interestRate').value/1200;
let n=document.getElementById('loanYears').value*12;

let emi=(P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
document.getElementById('loanResult').innerText="Monthly EMI: "+emi.toFixed(0);
}

function calculatePeriod(){
let last = new Date(document.getElementById('lastPeriod').value);
let cycle = parseInt(document.getElementById('cycleLength').value) || 28;
last.setDate(last.getDate()+cycle);

document.getElementById('periodResult').innerText =
"Estimated next period: "+ last.toDateString();
}