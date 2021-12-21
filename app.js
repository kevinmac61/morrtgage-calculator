
// get information for the submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  
  const homeAmount = document.getElementById("home-amount").value;
  const downPayment = document.getElementById("down-payment").value;
  const interest = document.getElementById("interest").value;
  const years = document.getElementById("years").value;
  let principal = 0;
  let mortgageInsurance = 0;

  // calculate the interest percent

  if (downPayment >= homeAmount * .25) {
    principal = parseFloat(homeAmount) - parseFloat(downPayment);
    mortgageInsurance = 0;
    console.log(`Mortgage Insurance is ${mortgageInsurance}`)
  } else if (downPayment >= (homeAmount * .20)) {
      principal = (parseFloat(homeAmount) - parseFloat(downPayment)) * 1.017;
      mortgageInsurance = (principal / 1.04) * .017;
      console.log(`Mortgage Insurance is ${mortgageInsurance}`)
  } else if  (downPayment >= homeAmount * .15) {
      principal = (parseFloat(homeAmount) - parseFloat(downPayment)) * 1.024;
      mortgageInsurance = (principal / 1.04) * .024;
  } else if  (downPayment >= homeAmount * .10) {
      principal = (parseFloat(homeAmount) - parseFloat(downPayment)) * 1.028;
      mortgageInsurance = (principal / 1.04) * .028;
  } else if  (downPayment > homeAmount * .05) {
      principal = (parseFloat(homeAmount) - parseFloat(downPayment)) * 1.031;
      mortgageInsurance = (principal / 1.04) * .031
  } else {
      principal = (parseFloat(homeAmount) - parseFloat(downPayment)) * 1.04;
      mortgageInsurance = (principal / 1.04) * .04;
      console.log(`Mortgage Insurance iss ${mortgageInsurance} principal is ${principal}`)
  }
   
  const calculateInterest = parseFloat(interest) / 100;
  const eprConvert = ((1 + (calculateInterest / 2))**2)**(1/12) -1; //monthly interest compounded semi-annually
  const calculatedPayments = parseFloat(years) * 12;


  // compute the monthly payment

  const monthlyPayment = ((principal * eprConvert) / (1-(1 + eprConvert)**-calculatedPayments)).toFixed(2);

  // compute the interest

  const totalInterest = (monthlyPayment * calculatedPayments - principal).toFixed(2);

  // compute total payment

  const totalPayment = (monthlyPayment * calculatedPayments).toFixed(2);

  // show the results
  console.log(principal)
  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

  document.getElementById("mortgageInsurance").innerHTML = "$" + mortgageInsurance;

  document.getElementById("totalInterest").innerHTML = "$" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;


  e.preventDefault();
}