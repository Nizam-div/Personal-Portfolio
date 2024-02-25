const steps = document.querySelectorAll('.step');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
const billingSelect = document.getElementById('billing');
const paymentDetails = document.querySelectorAll('.payment-details');

let currentStep = 0;

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    if (index === stepIndex) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function showPaymentDetails() {
  paymentDetails.forEach(detail => {
    detail.classList.remove('active');
  });

  const selectedBillingSource = billingSelect.value;
  const selectedPaymentDetails = document.getElementById(`${selectedBillingSource}-details`);

  if (selectedPaymentDetails) {
    selectedPaymentDetails.classList.add('active');
  }
}

function goToNextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
    showPaymentDetails();
  }
}

function goToPrevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
    showPaymentDetails();
  }
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    goToNextStep();
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    goToPrevStep();
  });
});

billingSelect.addEventListener('change', () => {
  showPaymentDetails();
});

// Ok button
const okButton = document.querySelector('.ok-button');
const formContainer = document.querySelector('.container');

okButton.addEventListener('click', function() {
  // Hide or remove the form from the page
  formContainer.style.display = 'none';
});
