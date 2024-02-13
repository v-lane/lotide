const eqArrays = require('./eqArrays');

//implement 'assertArraysEqual' to take in 2 arrays and console.log
//an appropriate message to the console.

const assertArraysEqual = function(arr1, arr2) {
  let pass = eqArrays(arr1, arr2);
  if (pass) {
    console.log(`✅✅ Assertion Passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
module.exports = assertArraysEqual;