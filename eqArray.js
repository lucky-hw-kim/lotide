// FUNCTION IMPRELEMENTATION

function eqArrays (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

// eqArrays([1, 2, 3], [1, 2, 3]) // => treu
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(['1', '2', '3'], ['1', '2', '3']) // => true
// eqArrays(['1', '2', '3'], ['1', '2', 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS
assertEqual(eqArrays([1, 3, 2], [1, 2, 3]), false) // => should PASS

