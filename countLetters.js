const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

function countLetters (str) {
  const result = {}
  const noSpace = str.split(' ').join('').toLowerCase()
  for (const char of noSpace) {
    if (result[char]) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}

const str = "This Is an ExamPle"

const resultFinal = countLetters(str);

assertEqual(resultFinal.t, 1)
assertEqual(resultFinal.m, 2)
assertEqual(resultFinal.f, 0)
assertEqual(resultFinal.a, 2)