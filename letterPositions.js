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


// function called letterPositions that takes in a sentence as a string
// and returns an object
// that shows all indices in the string where each character is found
// Each letter will return one or more numbers (indices)


const letterPositions = function(sentence) {
  if (typeof sentence !== "string") {
    return;
  }

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (!results[key]) {
      results[key] = [];
      results[key].push(i);
      
    } else {
      results[key].push(i);
    }
  }
  console.log("else", results);
  return results;
};

const results = letterPositions("hello");

assertArraysEqual(results["h"],[0]);
assertArraysEqual(results["e"],[1]);
assertArraysEqual(results["l"],[2, 3]);
assertArraysEqual(results["o"],[4]);


