// FUNCTION IMPRELEMENTATION
function eqArrays (arr1, arr2) {
  let arrayLength = 0
  if (arr1.length === arr2.length) {
    arrayLength = arr1.length
  } else {
    return false
  }

  for (let i = 0; i < arrayLength; i++) {
    if (arr1[i] === arr2[i]) {
      arr1.push(arr2[i])
    }
  } if (arr1.length === arrayLength * 2) {
    return true
  } else {
    return false
  }
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

eqArrays([1, 2, 3], [1, 2, 3]) // => treu
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(['1', '2', '3'], ['1', '2', '3']) // => true
eqArrays(['1', '2', '3'], ['1', '2', 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS
assertEqual(eqArrays([1, 3, 2], [1, 2, 3]), false) // => should PASS

