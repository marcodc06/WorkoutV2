function calculateBMI() {
    var feet = parseFloat(document.getElementById("bmiFeet").value);
    var inches = parseFloat(document.getElementById("bmiInches").value);
    var weight = parseFloat(document.getElementById("bmiWeight").value);
    var gender = document.getElementById("bmiGender").value;

    if (isNaN(feet) || isNaN(inches) || isNaN(weight) || feet <= 0 || inches < 0 || weight <= 0) {
        document.getElementById("bmiResult").textContent = "Please enter valid values.";
        return;
    }

    var heightInches = feet * 12 + inches;
    var bmi = (weight / (heightInches * heightInches)) * 703;

    document.getElementById("bmiResult").textContent = "Your BMI is: " + bmi.toFixed(2);
}

// clear BMI inputs
function clearBmiInputs() {
    document.getElementById("bmiFeet").value = "";
    document.getElementById("bmiInches").value = "";
    document.getElementById("bmiWeight").value = "";
    document.getElementById("bmiGender").selectedIndex = 0;
    document.getElementById("bmiResult").textContent = "";
}



function calculateCalories() {
    var age = parseFloat(document.getElementById("calAge").value);
    var gender = document.getElementById("calGender").value;
    var feet = parseFloat(document.getElementById("calFeet").value);
    var inches = parseFloat(document.getElementById("calInches").value);
    var weight = parseFloat(document.getElementById("calWeight").value);
    var activityLevel = document.getElementById("calActivityLevel").value;

    if (isNaN(age) || isNaN(feet) || isNaN(inches) || isNaN(weight)) {
        document.getElementById("calorieResult").textContent = "Please enter valid age, height, and weight values.";
        return;
    }

    var heightInches = feet * 12 + inches;
    var bmr;
    if (gender === "male") {
        bmr = 66 + (6.2 * weight) + (12.7 * heightInches) - (6.76 * age);
    } else {
        bmr = 655 + (4.35 * weight) + (4.7 * heightInches) - (4.7 * age);
    }

    var tdee;
    if (activityLevel === "sedentary") {
        tdee = bmr * 1.2;
    } else if (activityLevel === "lightlyActive") {
        tdee = bmr * 1.375;
    } else if (activityLevel === "moderatelyActive") {
        tdee = bmr * 1.55;
    } else if (activityLevel === "veryActive") {
        tdee = bmr * 1.725;
    } else {
        tdee = bmr * 1.9;
    }

var maintainWeight = tdee.toFixed(0);
var mildWeightLoss = (tdee * 0.9).toFixed(0);
var weightLoss = (tdee * 0.8).toFixed(0);
var extremeWeightLoss = (tdee * 0.61).toFixed(0);
var mildWeightGain = (tdee * 1.1).toFixed(0);
var weightGain = (tdee * 1.2).toFixed(0);
var fastWeightGain = (tdee * 1.39).toFixed(0);

var calorieResults = `
    Maintain weight: ${maintainWeight} calories <br>
    Mild weight loss (0.5 lb/week): ${mildWeightLoss}<br>
    Weight loss (1 lb/week): ${weightLoss}<br>
    Extreme weight loss (2 lb/week): ${extremeWeightLoss}<br>
    Mild weight gain (0.5 lb/week): ${mildWeightGain}<br>
    Weight gain (1 lb/week): ${weightGain}<br>
    Fast weight gain (2 lb/week): ${fastWeightGain}
`;

document.getElementById("calorieResult").innerHTML = calorieResults;
}
function clearCalInputs() {
    document.getElementById("calAge").value = "";
    document.getElementById("calGender").value = "male";
    document.getElementById("calFeet").value = "";
    document.getElementById("calInches").value = "";
    document.getElementById("calWeight").value = "";
    document.getElementById("calActivityLevel").value = "sedentary";
    document.getElementById("calorieResult").textContent = "";
}
//protein calc
function calculateProtein() {
    var age = parseInt(document.getElementById("proAge").value);
    var gender = document.getElementById("proGender").value;
    var feet = parseFloat(document.getElementById("proHeightFeet").value);
    var inches = parseFloat(document.getElementById("proHeightInches").value);
    var weight = parseFloat(document.getElementById("proWeight").value);
    var activityLevel = document.getElementById("proActivityLevel").value;

    if (isNaN(age) || isNaN(feet) || isNaN(inches) || isNaN(weight)) {
        document.getElementById("proteinResults").textContent = "Please enter valid age, height, and weight values.";
        return;
    }

    var heightInches = feet * 12 + inches;
    var proteinEstimates = calculateProteinRequirements(weight, activityLevel);

    var proteinResults = "<h3>Protein Requirements</h3>";
    for (var estimate in proteinEstimates) {
        proteinResults += "<p>" + estimate + ": " + proteinEstimates[estimate] + " grams/day</p>";
    }

    document.getElementById("proteinResults").innerHTML = proteinResults;
}

function calculateProteinRequirements(weight, activityLevel) {
    var proteinFactor;
    if (activityLevel === "sedentary") {
        proteinFactor = 0.8;
    } else if (activityLevel === "lightlyActive") {
        proteinFactor = 1.0;
    } else if (activityLevel === "moderatelyActive") {
        proteinFactor = 1.2;
    } else if (activityLevel === "veryActive") {
        proteinFactor = 1.4;
    } else {
        proteinFactor = 1.6;
    }

    var proteinEstimates = {};
    proteinEstimates["Muscle Building (Bulking Up)"] = (weight * proteinFactor * 2).toFixed(0);
    proteinEstimates["Losing Fat (Cutting)"] = (weight * proteinFactor).toFixed(0);
    proteinEstimates["Maintaining Weight"] = (weight * proteinFactor).toFixed(0);

    return proteinEstimates;
}

function clearProInputs() {
    document.getElementById("proAge").value = "";
    document.getElementById("proHeightFeet").value = "";
    document.getElementById("proHeightInches").value = "";
    document.getElementById("proWeight").value = "";
    document.getElementById("proActivityLevel").selectedIndex = 0;
    document.getElementById("proteinResults").textContent = "";
}







    // // Calculate calorie intake for weight loss or weight gain based on user's goal
    // var calorieIntake;
    // switch (goalInput.value) {
    //     case "loseWeight":
    //         calorieIntake = tdee - 500; // Aim for 500 calorie deficit for weight loss
    //         break;
    //     case "gainWeight":
    //         calorieIntake = tdee + 500; // Aim for 500 calorie surplus for weight gain
    //         break;
    //     default:
    //         calorieIntake = tdee; // Maintain current weight if no goal is selected
    //         break;
    // }

    // // Display the result
    // resultContainer.textContent = "Your estimated daily calorie intake is: " + Math.round(calorieIntake) + " calories";


