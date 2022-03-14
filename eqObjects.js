const eqArrays = require('./eqArrays');

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

module.exports = eqObjects

// const ab = { a: '1', b: '2' }
// const ba = { b: '2', a: '1' }
// console.log(eqObjects(ab, ba)) // => true

// const abc = { a: '1', b: '2', c: '3' }
// assertEqual(eqObjects(ab, abc), false) // => false

// const cd = { c: '1', d: ['2', 3] }
// const dc = { d: ['2', 3], c: '1' }
// assertEqual(eqObjects(cd, dc), true) // => true

// const cd2 = { c: '1', d: ['2', 3, 4] }
// assertEqual(eqObjects(cd, cd2), false) // => false
