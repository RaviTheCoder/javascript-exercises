const removeFromArray = function(array, ...value) {

    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === value[i]) {
                array.splice(j, 1);
            } 
        }
    }
    return array;
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
