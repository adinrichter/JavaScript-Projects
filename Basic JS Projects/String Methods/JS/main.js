equation = (3409/487)-(1926/642)
num = equation.toString();

document.getElementById("result").innerHTML = "Display the middle " + num + " characters of your sentence";

function mergeNames() {
    first = document.getElementById("first").value;
    last = document.getElementById("last").value;
    document.getElementById("firstResult").innerHTML = first.concat(" ", last); 
}

function centerSentence() {
    sentence = document.getElementById("sentence").value;
    half = sentence.length/2;
    start = half-2;
    end = half+2;
    out = sentence.slice(start, end);
    document.getElementById("secondResult").innerHTML = "'".concat(out, "'");
}

function randomNum() {
    number = Math.random() * 100
    trim = number.toPrecision(4);
    out = Number(trim).toFixed(2)
    document.getElementById("thirdResult").innerHTML = out;
}