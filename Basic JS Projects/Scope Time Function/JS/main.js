// creates an error message because the time variable hasn't been defined yet
console.log(time);
let globalVariable = "I'm worldwide!"

function currentTime() {
    // creates local variable time
    time = new Date().getHours()
    // returns a different result depending on the current time
    switch (true) {
        case time == 0:
            out = "It's Midnight!";
            break;
        case time < 12:
            out = `It's ${time}`;
            break;
        case time == 12:
            out = "It's Noon!";
            break;
        default:
            out = `It's ${time-12}`;
    }
    // modifies the result if it fits under specific criteria
    if (time != 0 && time != 12) {
        out += " o` clock ";
        if (time < 12) {
            out += "in the morning!"
        }
        else if (time > 12) {
            out += "in the evening!"
        }
    }
    // displays the result on the final page
    document.getElementById("timeResult").innerHTML = out;
}
