const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
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

//map function
// take in array to map and callback function
// return new array based on results of callback function


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
const results2 = map([], word => word[0]);
const results3 = map([1, 2, 3], num => num * 2);

//tests
assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2,[]);
assertArraysEqual(results3,[2, 4, 6]);




