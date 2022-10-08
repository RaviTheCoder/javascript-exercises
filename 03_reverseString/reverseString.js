const reverseString = function(text) {
    let reversed = '';
    i = 0;
    while (i < text.length) {
        reversed = text.charAt(i) + reversed;
        i++;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;