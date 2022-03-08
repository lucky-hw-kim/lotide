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

function flatten (arr) {
  const result = [];
  for(const item of arr){
    if(Array.isArray(item)){
      for(const value of item) {
        result.push(value);
      }
    } else {
      result.push(item);
    }
  }
  console.log(result);
}

flatten([1, 2, [3, 4], 5, [6]]) 