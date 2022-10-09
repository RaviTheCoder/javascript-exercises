const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }

    let lowNum = Math.min(num1, num2);
    let highNum = Math.max(num1, num2);
    let finalScore = 0;

    if (lowNum < 0) {
        return "ERROR";
    }

    while (lowNum <= highNum) {
        finalScore += lowNum;
        lowNum++;
    }
    return finalScore;
};

// Do not edit below this line
module.exports = sumAll;
