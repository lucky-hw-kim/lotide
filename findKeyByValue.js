const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

function findKeyByValue (obj, val) {
  const values = Object.values(obj)
  const keys = Object.keys(obj)
  for (let i = 0; i < values.length; i++) {
    if (values[i] === val) {
      return keys[i]; 
    }
  }
  return undefined;
}

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
}

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
