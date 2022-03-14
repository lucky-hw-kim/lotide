const findKey = function (obj, callback) {
  const values = Object.values(obj)
  const keys = Object.keys(obj)  
  let result;
  console.log(keys);

  for(let i = 0; i < values.length; i++){
    if(callback(values[i])) {
      result = keys[i];
      break;
    }
  }
  return result
}

module.exports = findKey;

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)