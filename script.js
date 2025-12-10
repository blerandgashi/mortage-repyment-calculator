let interestRate = document.querySelector("#percentage");
let yearsEl = document.querySelector("#years");
let mortageAmount = document.querySelector("#amount");

const formContainerEl = document.querySelector("#form-container");
const clearBtn = document.querySelector("#clear-btn");

let repaymentCheckbox = document.querySelector("#repayment");
let interestOnlyCheckbox = document.querySelector("#interest");

let monthlyRepayments = document.querySelector(".payment");
let totalPayment = document.querySelector(".total-payment");


function calculateRepayments(){
  let monthlyRate = Number(interestRate.value) / 100 / 12
  let numberOfPayments = Number(yearsEl.value) * 12;
  let mortageAmountNumber = Number(mortageAmount.value);
  
  const interestOnly = mortageAmountNumber * monthlyRate;
  const monthlyPayment = mortageAmountNumber * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) -1);
  
  if (repaymentCheckbox.checked) {
    // Repayment mortgage
    monthlyRepayments.textContent = `$ ${monthlyPayment.toFixed(2)}`;
    totalPayment.textContent = `$ ${(monthlyPayment * numberOfPayments).toFixed(2)}`;
  } 
  
  else if (interestOnlyCheckbox.checked) {
    // Interest only
    monthlyRepayments.textContent = `$ ${interestOnly.toFixed(2)}`;
    totalPayment.textContent = `$ ${(interestOnly * numberOfPayments).toFixed(2)}`;
  }
}

mortageAmount.addEventListener("input", calculateRepayments);
yearsEl.addEventListener("input", calculateRepayments);
interestRate.addEventListener("input", calculateRepayments);

formContainerEl.addEventListener("submit", function(e){
  e.preventDefault()
  calculateRepayments()
})

clearBtn.addEventListener("click", function(){
  mortageAmount.value = "";
  yearsEl.value = "";
  interestRate.value = "";

  monthlyRepayments.textContent = "$";
  totalPayment.textContent = "$";
})