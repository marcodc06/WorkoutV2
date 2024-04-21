function calculateBMI() {
    var feet = parseFloat(document.getElementById("feet").value);
    var inches = parseFloat(document.getElementById("inches").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(feet) || isNaN(inches) || isNaN(weight) || feet <= 0 || inches < 0 || weight <= 0) {
        document.getElementById("bmiResult").textContent = "Please enter valid values.";
        return;
    }

    var heightInches = feet * 12 + inches;
    var bmi = (weight / (heightInches * heightInches)) * 703;

    document.getElementById("bmiResult").textContent = "Your BMI is: " + bmi.toFixed(2);
};

function clearInputs() {
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("bmiResult").textContent = "";
}


function calculateCalories() {
    var age = parseFloat(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var feet = parseFloat(document.getElementById("feet2").value);
    var inches = parseFloat(document.getElementById("inches2").value);
    var weight = parseFloat(document.getElementById("weight2").value);
    var activityLevel = document.getElementById("activityLevel").value;

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

    var calorieEstimates = {
        "Maintain weight": tdee.toFixed(0),
        "Mild weight loss (0.5 lb/week)": (tdee * 0.9).toFixed(0),
        "Weight loss (1 lb/week)": (tdee * 0.8).toFixed(0),
        "Extreme weight loss (2 lb/week)": (tdee * 0.61).toFixed(0),
        "Mild weight gain (0.5 lb/week)": (tdee * 1.1).toFixed(0),
        "Weight gain (1 lb/week)": (tdee * 1.2).toFixed(0),
        "Fast weight gain (2 lb/week)": (tdee * 1.39).toFixed(0)
    };

    var calorieResults = "Calorie Estimates (Calories/day):\n";
    for (var estimate in calorieEstimates) {
        calorieResults += estimate + ": " + calorieEstimates[estimate] + "\n";
    }

    document.getElementById("calorieResult").textContent = calorieResults;
}
function clearInputs() {
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("feet2").value = "";
    document.getElementById("inches2").value = "";
    document.getElementById("weight2").value = "";
    document.getElementById("activityLevel").value = "sedentary";
    document.getElementById("calorieResult").textContent = "";
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


