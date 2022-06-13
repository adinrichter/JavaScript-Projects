// creates the number 4 for arbitrarily complicated reasons because why not
equation = (3409/487)-(1926/642)
// converts the number 4 to a string
num = equation.toString();
// gives the button used later text to display using the string of 4
document.getElementById("result").innerHTML = "Display the middle " + num + " characters of your sentence";

function mergeNames() {
    // makes a variable with each of the values given by the user
    first = document.getElementById("first").value;
    last = document.getElementById("last").value;
    // merges the names and displays them as a result
    document.getElementById("firstResult").innerHTML = first.concat(" ", last); 
}

function centerSentence() {
    // gets the user's inputted sentence
    sentence = document.getElementById("sentence").value;
    // finds the numerical value of half of the sentence length
    half = sentence.length/2;
    // goes 2 numbers before the center for a starting position
    start = half-2;
    // goes 2 numbers after the center for an ending position
    end = half+2;
    // uses the generated start and end values to display only a middle portion of the sentence
    out = sentence.slice(start, end);
    // displays the result and adds apostrophes so that leading or trailing whitespace can be noted
    document.getElementById("secondResult").innerHTML = "'".concat(out, "'");
}

function randomNum() {
    // creates a random number between 0 and 100
    number = Math.random() * 100
    // trims the number to 4 digits long at the max
    trim = number.toPrecision(4);
    // prevents decimals going more than 2 decimal places when whole part chosen is a single digit long
    out = Number(trim).toFixed(2)
    document.getElementById("thirdResult").innerHTML = out;
}