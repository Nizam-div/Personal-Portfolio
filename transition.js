const steps = document.querySelectorAll('.step');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');

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

function goToNextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function goToPrevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    goToNextStep();
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    goToPrevStep();
  });
});
