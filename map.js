const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for(let item of array){
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => '33' + word.slice(0,2))
const results4 = map(words, word => word.length + 1000)

console.log(results1);
console.log(results2);
console.log(results3);
console.log(results4);

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

assertArraysEqual(results1, ['g', 'c', 't'])
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ])
assertArraysEqual(results3, [ '33gr', '33co', '33to', '33ma', '33to'])
assertArraysEqual(results4, [ 1006, 1007, 1002, 1005, 1003 ])


