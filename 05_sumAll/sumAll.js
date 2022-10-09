const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR';
    }
    
    let lowNum = Math.min(num1, num2);
    let highNum = Math.max(num1, num2);
    let finalSum = 0;

    if (lowNum < 0) {
        return 'ERROR';
    }

    while (lowNum <= highNum) {
        finalSum += lowNum;
        lowNum++;
    }

    return finalSum;
};

sumAll(1, 4);


// Do not edit below this line
module.exports = sumAll;
