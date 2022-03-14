// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle