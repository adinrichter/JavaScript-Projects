// this is a mostly branchless countdown timer

function startCountdown() {
    // creates a button constant and disables it, so that excess triggers don't cause issues
    const button = document.getElementById("start"); button.disabled = true;
    // sets a and b to the user's given input
    let a = b = document.getElementById("seconds").value;
    // sets the pages shown countdown to to the current number of seconds remaining
    // also decreases the value by 1
    function countdown() {
        timer.innerHTML = (b--*(b>-1));
    }
    // repeats a given function a given number of times
    // the first time it's run, which is while b is not less than a, it executes instantly
    // because that pass is used to draw the first number as soon as the user clicks start
    // after that, it waits 1 second between runs, as its application here is to count seconds
    function repeat(func, times) {
        setTimeout(function(){
            func();
        times && --times && repeat(func, times);
        }, (b<a)*1000)
    }
    // repeats the countdown function the number of times the user gave in seconds
    repeat(function () {countdown(); }, a);
    // displays the ending message after all other actions have been completed
    setTimeout(function(){timer.innerHTML = "Time's up!", button.disabled = false}, a*1000);
}