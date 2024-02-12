const eqArrays = function(arr1, arr2) {
  
  //check if length same; if not, arrays are not same, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if each element in array does not matche; return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let pass = eqArrays(arr1, arr2);
  if (pass) {
    console.log(`✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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


//tests

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["a", "b", [], "c", false]),["a", "b", "c", false]);
assertArraysEqual(flatten([["a", "b"], [], "c", [false, true]]),["a", "b", "c", false, true]);

module.exports = flatten;