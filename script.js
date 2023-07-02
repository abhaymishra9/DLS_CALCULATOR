function calculateRuns() {
    var score = parseInt(document.getElementById("score").value);
    var overs = parseInt(document.getElementById("overs").value);
    var resultElement = document.getElementById("result");

    if (overs >= 1 && overs <= 20) {
        var runsRequired;
        if (overs === 1) {
            runsRequired = Math.floor((score * 13.7) / 100 + 1);
        } else if (overs === 2) {
            runsRequired = Math.floor((score * 19.7) / 100 + 1);
        } else if (overs === 3) {
            runsRequired = Math.floor((score * 25.4) / 100 + 1);
        } else if (overs === 4) {
            runsRequired = Math.floor((score * 30.8) / 100 + 1);
        } else if (overs === 5) {
            runsRequired = Math.floor((score * 36.2) / 100 + 1);
        } else if (overs === 6) {
            runsRequired = Math.floor((score * 41.7) / 100 + 1);
        } else if (overs === 7) {
            runsRequired = Math.floor((score * 49.3) / 100 + 1);
        } else if (overs === 8) {
            runsRequired = Math.floor((score * 54.0) / 100 + 1);
        } else if (overs === 9) {
            runsRequired = Math.floor((score * 57.9) / 100 + 1);
        } else if (overs === 10) {
            runsRequired = Math.floor((score * 61.3) / 100 + 1);
        } else if (overs === 11) {
            runsRequired = Math.floor((score * 65.0) / 100 + 1);
        } else if (overs === 12) {
            runsRequired = Math.floor((score * 68.3) / 100 + 1);
        } else if (overs === 13) {
            runsRequired = Math.floor((score * 71.5) / 100 + 1);
        } else if (overs === 14) {
            runsRequired = Math.floor((score * 75.1) / 100 + 1);
        } else if (overs === 15) {
            runsRequired = Math.floor((score * 79.2) / 100 + 1);
        } else if (overs === 16) {
            runsRequired = Math.floor((score * 83.5) / 100 + 1);
        } else if (overs === 17) {
            runsRequired = Math.floor((score * 87.7) / 100 + 1);
        } else if (overs === 18) {
            runsRequired = Math.floor((score * 91.7) / 100 + 1);
        } else if (overs === 19) {
            runsRequired = Math.floor((score * 95.6) / 100 + 1);
        } else if (overs === 20) {
            runsRequired = Math.floor((score * 100) / 100 + 1);
        }

        resultElement.textContent = "Runs required by Team B to win the match in " + overs + " overs is: " + runsRequired;
    } else {
        resultElement.textContent = "Invalid overs entered";
    }
}
