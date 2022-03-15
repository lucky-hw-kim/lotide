function flatten(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const value of item) {
        result.push(value);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

module.exports = flatten;


 