function addForm() {
    // tries to convert both inputs to a number
    var1 = parseInt(document.getElementById("var1").value);
    var2 = parseInt(document.getElementById("var2").value);
    // checks if inputs are numbers, and adds them if they are
    if (parseInt(var1+var2)) {
        result = var1+var2
    // displays the result on the main page
        document.getElementById("result").innerHTML = var1 + " + " + var2 + " is " + result;
    }
    // returns an error message if the inputs are not both numbers
    else {
        document.getElementById("result").innerHTML = "Your result could not be displayed, you may have 1 or more invalid inputs."
    } 
}

function subtractForm() {
    // tries to convert both inputs to a number
    var1 = parseInt(document.getElementById("var1").value);
    var2 = parseInt(document.getElementById("var2").value);
    // checks if inputs are numbers
    if (parseInt(var1+var2)) {
    //checks if the result is positive or negative, and returns relevant message
        if ((var1-var2) < 0) {
            result = "negative " + -(var1-var2)
        }
        else {
            result = var1-var2
        }
    // displays the result on the main page
        document.getElementById("result").innerHTML = var1 + " - " + var2 + " is " + result;
    }
    // returns an error message if the inputs are not both numbers
    else {
        document.getElementById("result").innerHTML = "Your result could not be displayed, you may have 1 or more invalid inputs."
    }
}

function divideForm() {
    // tries to convert both inputs to a number
    var1 = parseInt(document.getElementById("var1").value);
    var2 = parseInt(document.getElementById("var2").value);
    // checks if inputs are numbers, and divides the first by the second if they are
    if (parseInt(var1+var2)) {
    // determines the remainder and quotient
        result = Math.floor(var1/var2)
        remainder = var1 % var2
    // determines how to display result
    if (result >= -1 && result <= 1 && result != 0) {
        result = result + " time,"
    }
    else {
        result = result + " times,"
    }
    // displays the result on the main page
        document.getElementById("result").innerHTML = var2 + " goes into " + var1 + " " + result + " with a remainder of " + remainder;
    }
    // returns an error message if the inputs are not both numbers
    else {
        document.getElementById("result").innerHTML = "Your result could not be displayed, you may have 1 or more invalid inputs."
    }
}

function multiplyForm() {
    // tries to convert both inputs to a number
    var1 = parseInt(document.getElementById("var1").value);
    var2 = parseInt(document.getElementById("var2").value);
    // checks if inputs are numbers, and multiplies them if they are
    if (parseInt(var1+var2)) {
        result = var1*var2
    // displays the result on the main page
        document.getElementById("result").innerHTML = var1 + " * " + var2 + " is " + result;
    }
    // returns an error message if the inputs are not both numbers
    else {
        document.getElementById("result").innerHTML = "Your result could not be displayed, you may have 1 or more invalid inputs."
    }
}

function pythagoreanForm() {
    // tries to convert both inputs to a number
    var1 = parseInt(document.getElementById("var1").value);
    var2 = parseInt(document.getElementById("var2").value);
    // checks if inputs are numbers, and multiplies them if they are
    if (parseInt(var1+var2)) {
        result = Math.sqrt(var1**2+var2**2)
    // displays the result on the main page
        document.getElementById("result").innerHTML = "The hypotenuse of a right triangle with side lengths " + var1 + " and " + var2 + " is " + result;
    }
    // returns an error message if the inputs are not both numbers
    else {
        document.getElementById("result").innerHTML = "Your result could not be displayed, you may have 1 or more invalid inputs."
    }
}

function incrementVar1() {
    // creates a constant to modify operator 1
    const num = document.getElementById("var1");
    out = num.value
    // increases value by 1 if there's currently a number, sets it to 1 if there isn't
    if (parseInt(out)) {
        num.value = ++out;
    }
    else {
        num.value = 1;
    }
}

function decrementVar1() {
    // creates a constant to modify operator 1
    const num = document.getElementById("var1");
    out = num.value
    // decreases value by 1 if there's currently a number, sets it to -1 if there isn't
    if (parseInt(out)) {
        num.value = --out;
    }
    else {
        num.value = -1;
    }
}

function incrementVar2() {
    // creates a constant to modify operator 2
    const num = document.getElementById("var2");
    out = num.value
    // increases value by 1 if there's currently a number, sets it to 1 if there isn't
    if (parseInt(out)) {
        num.value = ++out;
    }
    else {
        num.value = 1;
    }
}

function decrementVar2() {
    // creates a constant to modify operator 2
    const num = document.getElementById("var2");
    out = num.value
    // decreases value by 1 if there's currently a number, sets it to -1 if there isn't
    if (parseInt(out)) {
        num.value = --out;
    }
    else {
        num.value = -1;
    }
}

function randomVar1() {
    // sets the value of operator 1 to a random number between 0 and 999
    const num = document.getElementById("var1")
    num.value = Math.floor(Math.random() * 1000)
}

function randomVar2() {
    // sets the value of operator 2 to a random number between 0 and 999
    const num = document.getElementById("var2")
    num.value = Math.floor(Math.random() * 1000)
}