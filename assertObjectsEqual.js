const assertObjectsEqual = function (object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1)
  const obj2Keys = Object.keys(object2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  } else {
    for (const key of obj1Keys) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false
          }
        } else {
          return false
        }
      }
    }
    return true
  }
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

const ab = { a: '1', b: '2' }
const ba = { b: '2', a: '1' }

const cd = { c: '1', d: ['2', 3] }
const cd2 = { c: '1', d: ['2', 3, 4] }

assertObjectsEqual(ab, ba)
assertObjectsEqual(cd, cd2)
