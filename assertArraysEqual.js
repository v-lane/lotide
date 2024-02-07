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

//check for accuracy
assertArraysEqual([], []); //pass
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //fail
assertArraysEqual([true, false, true], [true, false, "true"]); //fail
assertArraysEqual([1, 2, 3], [1, 2]); //fail
