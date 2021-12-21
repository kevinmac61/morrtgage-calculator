
// get information for the submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  
  const homeAmount = document.getElementById("home-amount").value;
  const downPayment = document.getElementById("down-payment").value;
  const interest = document.getElementById("interest").value;
  const years = document.getElementById("years").value;


  // calculate the interest percent

  const principal = parseFloat(homeAmount) - parseFloat(downPayment); //is correct
  console.log(`Principal is ${principal}`);
  const calculateInterest = parseFloat(interest) / 100;
  const eprConvert = ((1 + (calculateInterest / 2))**2)**(1/12) -1; //monthly
  console.log(`EPR converted is ${eprConvert}`);
  const calculatedPayments = parseFloat(years) * 12;
  console.log(`Number of Monthly payments is ${calculatedPayments}`); //is correct


  // compute the monthly payment

  const monthlyPayment = ((principal * eprConvert) / (1-(1 + eprConvert)**-calculatedPayments)).toFixed(2);

  // compute the interest

  const totalInterest = (monthlyPayment * calculatedPayments - principal).toFixed(2);

  // compute total payment

  const totalPayment = (monthlyPayment * calculatedPayments).toFixed(2);

  // show the results

  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "$" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;


  e.preventDefault();
}