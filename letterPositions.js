const letterPositions = function (sentence) {
  const results = {}
  // logic to update results here
  const lowerCase = sentence.toLowerCase()
  for (let i = 0; i < lowerCase.length; i++) {
    // if(!joined[char]){
    if (lowerCase[i] !== ' ') {
      if (!results[lowerCase[i]]) {
        results[lowerCase[i]] = []
        results[lowerCase[i]].push(i)
      } else {
        results[lowerCase[i]].push(i)
      }
    }
  }
  return results
}

module.exports = letterPositions;

