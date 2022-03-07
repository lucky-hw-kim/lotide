// FUNCTION IMPRELEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)
assertEqual('string', 'string')
assertEqual('string', 'non-string')
assertEqual(3, 3)
assertEqual(6, 3)
