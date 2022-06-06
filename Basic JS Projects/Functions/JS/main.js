var num;

function pressed() {
    if (num >= 1) {
        num = num + 1;
    } else {
        num = 1;
    }
    str = "Clicks: " + num;
    document.getElementById("button").innerHTML = str;
}