const functions = require('../head')

functions.assertEqual(functions.head([5, 6, 7]), 5)
functions.assertEqual(functions.head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
functions.assertEqual(functions.head([1, 2, 3, 4]), 1)
functions.assertEqual(functions.head(['a', 'b', 'c', 'd']), 'a')
functions.assertEqual(functions.head([]), undefined)
functions.assertEqual(functions.head(['c']), 'c')
