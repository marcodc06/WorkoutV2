function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var heightUnit = document.getElementById("heightUnit").value;
    var weightUnit = document.getElementById("weightUnit").value;
    var resultContainer = document.getElementById("bmiResult");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    // valid or no
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultContainer.textContent = "Please enter valid height and weight values.";
        return;
    }

    // to metric
    if (heightUnit === "inches") {
        height *= 2.54; // Convert inches to centimeters
    }
    if (weightUnit === "pounds") {
        weight *= 0.453592; // Convert pounds to kilograms
    }

    // bmi
    var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
    resultContainer.textContent = "Your BMI is: " + bmi.toFixed(2);
}

