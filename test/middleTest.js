const functions = require('../middle')

//Test Code
// console.log(functions.middle([1, 2])) // => []
// console.log(functions.middle([1])) // => []
// console.log(functions.middle([1, 2, 3])) // => [2]
// console.log(functions.middle([1, 2, 3, 4, 5])) // => [3]
// console.log(functions.middle([1, 2, 3, 4])) // => [2, 3]
// console.log(functions.middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

functions.assertArraysEqual(functions.middle([1, 2, 3]), [2]);
functions.assertArraysEqual(functions.middle([1, 2, 3, 4, 5]), [2, 4]);
