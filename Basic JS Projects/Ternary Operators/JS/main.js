function voteCheck() {
    var age, canVote
    age = document.getElementById("age").value;
    // checks whether or not the user meets preset conditions
    canVote = (age < 18) ? "You are not old enough":"You are old enough";
    // displays result
    document.getElementById("voteCheckResult").innerHTML = canVote + " to vote.";
}

function voteTime() {
    age = document.getElementById("age").value;
    time = age - 18;
    // checks how long since/until the user's value is past the preset condition
    voteLength = (time < 0) ? "You can vote in":"You have been able to vote for";
    // displays the result and calculates time since/until the condition is met
    document.getElementById("voteTimeResult").innerHTML = `${voteLength} ${Math.abs(time)} years!`;
}

function eligibleActivities() {
    age = document.getElementById("age").value;
    // displays the result of the whichActivity() function below
    document.getElementById("eligibleResult").innerHTML = whichActivity();
    // displays a different result depending on user input with time until the condition is met
    function whichActivity() {
        switch (true) {
            case age < 13:
                out = `In ${13-age} year(s), you can join social media!`;
                break;
            case age < 15:
                out = `In ${15-age} year(s), you can get a learners permit!`;
                break;
            case age < 16:
                out = `In ${16-age} year(s), you can get a driver's lisence!`;
                break;
            case age < 18:
                out = `In ${18-age} year(s), you can get a tattoo!`;
                break;
            case age < 21:
                out = `In ${21-age} year(s), you can buy and drink alchohol!`;
                break;
            case age < 25:
                out = `In ${25-age} year(s), you can rent a car!`;
                break;
            case age < 67:
                out = `In ${67-age} year(s), you can get social security benefits!`;
                break;
            case age > 67:
                out = "Sorry, nothing else fun from here.";
                break;
            default:
                out = "Sorry, an error occured"
        }
        return out;
    }
}