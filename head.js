const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const head = function (array) {
  return array[0]
}

assertEqual(head([5, 6, 7]), 5)
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
assertEqual(head([1, 2, 3, 4]), 1)
assertEqual(head([1, 2, 3, 4]), 2)
assertEqual(head(['a', 'b', 'c', 'd']), 'a')
assertEqual(head(['a', 'b', 'c', 'd']), 'b')
assertEqual(head([]), 'b')
assertEqual(head(['c']), 'c')
