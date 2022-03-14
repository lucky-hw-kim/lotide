const functions = require('../eqArrays')

functions.eqArrays([1, 2, 3], [1, 2, 3]) // => true
functions.eqArrays([1, 2, 3], [3, 2, 1]) // => false

functions.eqArrays(['1', '2', '3'], ['1', '2', '3']) // => true
functions.eqArrays(['1', '2', '3'], ['1', '2', 3]) // => false

functions.assertEqual(functions.eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS
functions.assertEqual(functions.eqArrays([1, 3, 2], [1, 2, 3]), false) // => should PASS