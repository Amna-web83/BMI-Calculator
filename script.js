document.getElementById('btn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  const bmiValueSpan = document.getElementById('bmivalue');
  const bmiCategorySpan = document.getElementById('bmicategory');

  if (!weight || !height || weight <= 0 || height <= 0) {
    bmiValueSpan.textContent = "Please enter valid numbers";
    bmiCategorySpan.textContent = "";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let interpretation = '';
  if (bmi < 18.5) {
    interpretation = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    interpretation = 'Overweight';
  } else {
    interpretation = 'Obese';
  }

  bmiValueSpan.textContent = bmi;
  bmiCategorySpan.textContent = interpretation;
});