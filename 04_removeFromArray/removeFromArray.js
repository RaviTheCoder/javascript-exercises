const removeFromArray = function(array, value) {

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == value) {
            // console.log(i);
            // console.log(array[i]);
            // console.log(value);
            array.splice(i, 1);
            console.log(array);
        } 
    }
    return array;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
