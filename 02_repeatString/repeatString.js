const repeatString = function(text, num) {
    let i = 0;
    let stringString = '';
    if (num < 0) {
        return "ERROR";
    }
    while (i < num) {
        stringString += text;
        i++;
    }
    return stringString;
};

let stringString = '';

function manyString(text, num) {
    let i = 0;
    while (i < num) {
        stringString += text;
    }
    i++;
}

// Do not edit below this line
module.exports = repeatString;
