const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//implement function 'eqArrays' which takes in twp arrays and 
//returns true or false, based on a perfect match

let eqArrays = function(arr1, arr2) {
  
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
}

//tests

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3]), false);
assertEqual(eqArrays(["true", "2", "3"], [true, "2", 3]), false);
assertEqual(eqArrays(["true", "false", "happy"], ["true", "FALSE", "happy"]), false);