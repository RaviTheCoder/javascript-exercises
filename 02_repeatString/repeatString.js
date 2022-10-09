const repeatString = function(text, num) {
    
    if (num < 0) {
        return 'ERROR';
    }
    
    let i = 0;
    let finalString = '';
    
    while (i < num) {
        finalString += text;
        i++;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;

repeatString('hey', 3);