const functions = require('../tail')

const result = functions.tail(['Hello', 'Lighthouse', 'Labs'])
functions.assertEqual(result.length, 2) // ensure we get back two elements
functions.assertEqual(result[0], 'Lighthouse') // ensure first element is "Lighthouse"
functions.assertEqual(result[1], 'Labs') // ensure second element is "Labs"

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs']
functions.tail(words) // no need to capture the return value since we are not checking it
functions.assertEqual(words.length, 3) // original array should still have 3 elements!