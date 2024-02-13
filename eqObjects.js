
let eqArrays = require('./eqArrays');

//implement eqObjects function
// take in 2 objects
// return true or false based on perfect match

const eqObjects = function(object1, object2) {
  const keyArr1 = Object.keys(object1);
  const keyArr2 = Object.keys(object2);



  //check sames number of keys
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }

  // check if keys are same
  for (let key of keyArr1) {
    if (!object2[key]) {
      return false;
    }
  }

  //check if key values same for each

  for (let key in object1) {

    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;