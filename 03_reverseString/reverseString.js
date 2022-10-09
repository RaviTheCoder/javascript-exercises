const reverseString = function(text) {
    let i = 0;
    let finalString = '';
    console.log(text.length);

    while (i < text.length) {
        finalString += text.charAt(text.length - (i + 1));
        i++;
    }
    return finalString;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
