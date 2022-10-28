const repeatString = function(text, num) {
    let i = 0;
    let final = '';

    if (num < 0) {
        return 'ERROR';
    }

    while (i < num) {
        final += text;
        i++;
    }
    
    return final;
};

// Do not edit below this line
module.exports = repeatString;
