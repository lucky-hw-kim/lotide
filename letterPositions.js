const letterPositions = function (sentence) {
  const results = {}
  // logic to update results here
  const lowerCase = sentence.toLowerCase()
  for (let i = 0; i < lowerCase.length; i++) {
    // if(!joined[char]){
    if (lowerCase[i] !== ' ') {
      if (!results[lowerCase[i]]) {
        results[lowerCase[i]] = []
        results[lowerCase[i]].push(i)
      } else {
        results[lowerCase[i]].push(i)
      }
    }
  }
  return results
}

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

console.log(letterPositions('lighthouse in the house'))
console.log(letterPositions('hello'))
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22])
