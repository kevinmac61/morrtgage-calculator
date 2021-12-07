// get information for the submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  

  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;
  const UIyears = document.getElementById("years").value;

  // calculate the interest percent

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  // compute the monthly payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  // compute the interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  // compute total payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  // show the results

  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "$" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

  e.preventDefault();
}
