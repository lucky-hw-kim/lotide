function flatten (arr) {
  const result = [];
  for(const item of arr){
    if(Array.isArray(item)){
      for(const value of item) {
        result.push(value);
      }
    } else {
      result.push(item);
    }
  }
  console.log(result);
}

module.exports = flatten;

// flatten([1, 2, [3, 4], 5, [6]]) 