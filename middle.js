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

//implement 'middle' function to take in 1 array and return middle-most element(s) as array

const middle = function(array) {
  let midElement = [];
  let midpoint = array.length / 2;


  if (array.length < 3) {
    return midElement;
  }

  if (Number.isInteger(midpoint)) {
    midElement.push(array[midpoint - 1]);
    midElement.push(array[midpoint]);
    return midElement;
  } else {
    //find middle ceil & floor, return 2 elements
    midElement.push(array[Math.floor(midpoint)]);
    return midElement;
  }
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(["1", "2", 3]), ["2"]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([true, false, true, false, true, false]), [true, false]);
