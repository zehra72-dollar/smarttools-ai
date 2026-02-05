// 1. Age Calculator
function calculateAge(){
let dob = new Date(document.getElementById('dob').value);
let now = new Date();
let diff = now - dob;
let years = Math.floor(diff / (1000*60*60*24*365.25));
let months = Math.floor(diff / (1000*60*60*24*30.44));
let days = Math.floor(diff / (1000*60*60*24));
let hours = Math.floor(diff / (1000*60*60));
let minutes = Math.floor(diff / (1000*60));
let seconds = Math.floor(diff / 1000);
document.getElementById('ageResult').innerText=
`You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds old.`;
}

// 2. Period Calculator
function calculatePeriod(){
let last = new Date(document.getElementById('lastPeriod').value);
let cycle = parseInt(document.getElementById('cycleLength').value) || 28;
last.setDate(last.getDate() + cycle);
document.getElementById('periodResult').innerText =
`Next period expected on: ${last.toDateString()}`;
}

// 3. BMI
function calculateBMI(){
let w=parseFloat(document.getElementById('weight').value);
let h=parseFloat(document.getElementById('height').value)/100;
let bmi=(w/(h*h)).toFixed(2);
let cat=bmi<18.5?'Underweight':bmi<24.9?'Normal':bmi<29.9?'Overweight':'Obese';
document.getElementById('bmiResult').innerText=`BMI: ${bmi} (${cat})`;
}

// 4. Loan EMI
function calculateLoan(){
let P=parseFloat(document.getElementById('loanAmount').value);
let r=parseFloat(document.getElementById('interestRate').value)/1200;
let n=parseInt(document.getElementById('loanYears').value)*12;
let emi=(P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
document.getElementById('loanResult').innerText=`Monthly EMI: ${emi.toFixed(2)}`;
}

// 5. Love
function calculateLove(){
let n1=document.getElementById('name1').value.toLowerCase();
let n2=document.getElementById('name2').value.toLowerCase();
let score=Math.floor(Math.random()*101);
document.getElementById('loveResult').innerText=`${n1} & ${n2} Compatibility: ${score}%`;
}

// 6. Pregnancy
function calculatePregnancy(){
let last=new Date(document.getElementById('lastMenstruation').value);
let due=new Date(last); due.setDate(due.getDate()+280);
document.getElementById('pregnancyResult').innerText=`Estimated due date: ${due.toDateString()}`;
}

// 7. Ovulation
function calculateOvulation(){
let last=new Date(document.getElementById('lastMenstrual').value);
let cycle=parseInt(document.getElementById('cycleOv').value) || 28;
let ovulation=new Date(last); ovulation.setDate(ovulation.getDate()+14);
document.getElementById('ovulationResult').innerText=`Estimated ovulation day: ${ovulation.toDateString()}`;
}

// 8. Calorie
function calculateCalories(){
let w=parseFloat(document.getElementById('calWeight').value);
let h=parseFloat(document.getElementById('calHeight').value);
let a=parseInt(document.getElementById('calAge').value);
let act=parseFloat(document.getElementById('activity').value);
let bmr=10*w+6.25*h-5*a+5;
let cal=Math.round(bmr*act);
document.getElementById('calorieResult').innerText=`Daily Calories Needed: ${cal} kcal`;
}

// 9. Discount
function calculateDiscount(){
let price=parseFloat(document.getElementById('originalPrice').value);
let discount=parseFloat(document.getElementById('discountPercent').value);
let finalPrice=(price*(100-discount)/100).toFixed(2);
document.getElementById('discountResult').innerText=`Final Price: $${finalPrice}`;
}

// 10. Compound Interest
function calculateCompoundInterest(){
let P=parseFloat(document.getElementById('ciPrincipal').value);
let r=parseFloat(document.getElementById('ciRate').value)/100;
let t=parseInt(document.getElementById('ciYears').value);
let n=parseInt(document.getElementById('ciTimes').value);
let A=P*Math.pow(1+r/n,n*t);
document.getElementById('compoundResult').innerText=`Total Amount: ${A.toFixed(2)}`;
}