const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};

module.exports = assertObjectsEqual;



// const ab = { a: '1', b: '2' }
// const ba = { b: '2', a: '1' }

// const cd = { c: '1', d: ['2', 3] }
// const cd2 = { c: '1', d: ['2', 3, 4] }

// assertObjectsEqual(ab, ba)
// assertObjectsEqual(cd, cd2)


