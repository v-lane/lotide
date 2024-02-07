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

//implement 'without' function to return subset of a given array, removing unwanted elements
//function should take in a 'source' array and a 'itemsToRemove' array
//should return new array with only elements from 'source' that are NOT present in 'itemsToRemove'

const without = function(source, itemsToRemove) {
  let newArray = [];

  //if itemsToRemove is blank, use spread syntax to create copy of the array
  if (itemsToRemove.length === 0) {
    newArray = [...source];
  }

  //for each element in source...
  for (let i = 0; i < source.length; i++) {

    //check against each element in itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {

      //if element at index i equals element at index j, break out of j loop
      if (source[i] === itemsToRemove[j]) {
        break;
      }

      //if index i checked against all elements of itemsToRemove and none equal, push element at index i to newArray
      if (j === itemsToRemove.length - 1) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};

//tests
assertArraysEqual(without([1, 2, 3],[1]),[2, 3]);
assertArraysEqual(without(["apple", "candy", "dog"],["apple", "dog", "cat"]),["candy"]);
assertArraysEqual(without([1, 2, 3],[]),[1, 2, 3]);
assertArraysEqual(without(["1", 2, 3],[1]),["1", 2, 3]);
assertArraysEqual(without([],[]),[]);
assertArraysEqual(without([],[1]),[]);