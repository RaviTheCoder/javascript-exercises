const removeFromArray = function(array, ...values) {
    for (let v = 0; v < values.length; v++) {
        for (let a = 0; a < array.length; a++) {
            if (array[a] === values[v]) {
                array.splice(a, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1, 2, 3, 4], 3);
