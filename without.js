function without (source, itemsToRemove) {
  let resultArray = []
  if (eqArrays(source, itemsToRemove)) {
    return resultArray
  } else {
    resultArray = source.filter(item => !itemsToRemove.includes(item))
  }
  console.log(resultArray)
}

module.exports = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(['1', '2', '3'], [1, 2, '3']) // => ["1", "2"]
// without(['a', 'b', '3'], ['a', 'b', '3'])

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
