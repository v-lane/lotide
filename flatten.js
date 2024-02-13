// create function that will take an array containing elements including nested arrays
// and return 'flattened' array (only 1 nested array level)

const flatten = function(array) {
  let newArray = [];

  for (let i of array) {
    if (Array.isArray(i)) {
      newArray = newArray.concat(i);
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};



module.exports = flatten;