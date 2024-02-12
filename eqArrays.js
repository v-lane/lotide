//implement function 'eqArrays' which takes in twp arrays and
//returns true or false, based on a perfect match

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

module.exports = eqArrays;