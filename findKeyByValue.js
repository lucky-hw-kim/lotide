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
module.exports = findKeyByValue

