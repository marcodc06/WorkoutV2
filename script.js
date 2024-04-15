function calculateBMI() {
    var system = document.getElementById("system").value;
    var height, weight;

    if (system === "imperial") {
        var feet = parseFloat(document.getElementById("heightFeet").value);
        var inches = parseFloat(document.getElementById("heightInches").value);
        height = (feet * 12 + inches) * 0.0254; // Convert feet and inches to meters
        weight = parseFloat(document.getElementById("weight").value) * 0.453592; // Convert pounds to kilograms
    } else {
        height = parseFloat(document.getElementById("heightCm").value) / 100; // Convert cm to meters
        weight = parseFloat(document.getElementById("weight").value); // Already in kilograms
    }

    var bmi = weight / (height * height);

    document.getElementById("bmiResult").textContent = "Your BMI is: " + bmi.toFixed(2);
}

document.getElementById("system").addEventListener("change", function() {
    var selectedSystem = document.getElementById("system").value;
    if (selectedSystem === "imperial") {
        document.getElementById("heightInput").style.display = "block";
        document.getElementById("heightMetric").style.display = "none";
    } else {
        document.getElementById("heightInput").style.display = "none";
        document.getElementById("heightMetric").style.display = "block";
    }
});


function calculateCalories() {
    var ageInput = document.getElementById("age");
    var genderInput = document.getElementById("gender");
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var activityLevelInput = document.getElementById("activityLevel");
    var goalInput = document.getElementById("goal");
    var heightUnit = document.getElementById("heightUnit").value;
    var weightUnit = document.getElementById("weightUnit").value;
    var resultContainer = document.getElementById("calorieResult");

    var age = parseFloat(ageInput.value);
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
    var activityLevel = parseFloat(activityLevelInput.value);

    // Check if inputs are valid numbers
    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        resultContainer.textContent = "Please enter valid age, height, and weight values.";
        return;
    }

    // Convert height and weight to metric units if necessary
    if (heightUnit === "inches") {
        height *= 2.54; // Convert inches to centimeters
    }
    if (weightUnit === "pounds") {
        weight *= 0.453592; // Convert pounds to kilograms
    }

    // Calculate BMR (Basal Metabolic Rate)
    var bmr;
    if (genderInput.value === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate Total Daily Energy Expenditure (TDEE) based on activity level
    var tdee;
    switch (activityLevel) {
        case "sedentary":
            tdee = bmr * 1.2;
            break;
        case "lightlyActive":
            tdee = bmr * 1.375;
            break;
        case "moderatelyActive":
            tdee = bmr * 1.55;
            break;
        case "veryActive":
            tdee = bmr * 1.725;
            break;
        case "extraActive":
            tdee = bmr * 1.9;
            break;
        default:
            tdee = bmr * 1.2; // Assume sedentary if no activity level is selected
            break;
    }

    // Calculate calorie intake for weight loss or weight gain based on user's goal
    var calorieIntake;
    switch (goalInput.value) {
        case "loseWeight":
            calorieIntake = tdee - 500; // Aim for 500 calorie deficit for weight loss
            break;
        case "gainWeight":
            calorieIntake = tdee + 500; // Aim for 500 calorie surplus for weight gain
            break;
        default:
            calorieIntake = tdee; // Maintain current weight if no goal is selected
            break;
    }

    // Display the result
    resultContainer.textContent = "Your estimated daily calorie intake is: " + Math.round(calorieIntake) + " calories";
}

