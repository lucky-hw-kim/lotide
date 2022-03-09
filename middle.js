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

function assertArraysEqual (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  }
}

function middle (arr) {
  const resultArr = []
  const midIndex = Math.floor(arr.length / 2)
  if (arr.length <= 2) {
    return resultArr
  } else {
    if (arr.length % 2 !== 0) {
      resultArr.push(arr[midIndex])
      return resultArr
    } else {
      resultArr.push(arr[midIndex - 1])
      resultArr.push(arr[midIndex])
      return resultArr
    }
  }
}

console.log(middle([1, 2])) // => []
console.log(middle([1])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 4]);
