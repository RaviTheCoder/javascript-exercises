const removeFromArray = function(array, ...value) {
    console.log(value.length);
    console.log(value[0]);
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
            if (array[j] == value[i]) {
                console.log(array[j]);
                console.log(value[i]);
                // console.log(array[i]);
                // console.log(value);
                array.splice(j, 1);
                console.log(array);
            } 
        }
    }
    console.log(array);
    return array;
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
