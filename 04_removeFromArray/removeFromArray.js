const removeFromArray = function(array, value) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] != value) {
            newArray = array.splice[i, 1];
        } 
        return array;
    }

};

// Do not edit below this line
module.exports = removeFromArray;
