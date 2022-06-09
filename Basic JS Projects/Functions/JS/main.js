var num; // creates a number variable to be used later 

function pressed() { 
    // counts how many times the user has pressed the button, and sets that to the text of the button
    if (num >= 1) { 
        num += 1
    }
    else {
        num = 1
    }
    str = "Clicks: " + num;
    document.getElementById("button").innerHTML = str;
}