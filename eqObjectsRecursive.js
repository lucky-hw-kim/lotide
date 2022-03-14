/* eslint-disable no-unreachable-loop */
const eqArrays = require('./eqArrays')

const eqObjectsRecursive = function (object1, object2) {
  const obj1Keys = Object.keys(object1)
  const obj2Keys = Object.keys(object2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  } else {
    for (const key in object1) {
      if (typeof object1[key] !== typeof object2[key]) {
        return false
      }
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false
        }
      } else if ((object1[key] !== object2[key])) {
        return false
      }
    }
  }
  return true
}

module.exports = eqObjectsRecursive;
// const ab = { a: '1', b: '2' }
// const ba = { b: '2', a: '1' }
// assertEqual(eqObjects(ab, ba), true) // => true

// const abc = { a: '1', b: '2', c: '3' }
// assertEqual(eqObjects(ab, abc), false) // => false

// const cd = { c: '1', d: ['2', 3] }
// const dc = { d: ['2', 3], c: '1' }
// assertEqual(eqObjects(cd, dc), true) // => true

// const cd2 = { c: '1', d: ['2', 3, 4] }
// assertEqual(eqObjects(cd, cd2), false) // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)// => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2, d: [3] }, { a: 1, b: 2 }), false)
