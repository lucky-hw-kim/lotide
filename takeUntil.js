const takeUntil = function(array, callback) {
  //find first item returns true in callback function
  let stopItem;
  let stopIndex = 0;
  for(let item of array){
    while(callback(item) === true) {
    stopItem = item
    break;
    }
  }
  stopIndex = array.indexOf(stopItem);
  array.splice(stopIndex)
  return array
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');


// results1,[ 1, 2, 5, 7, 2 ]
// results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]

//Expected Output
/*
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/