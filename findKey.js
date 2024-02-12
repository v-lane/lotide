const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// implement findKey
// takes object and callback
// scan object for first key for which the callback returns truthy value
//    return this key
//    if no key found, return undefined

const findKey = function(object, callback) {
  
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};




const objectToTest =  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


assertEqual(findKey(objectToTest, x => x.stars === 2),"noma");
assertEqual(findKey(objectToTest, x => x.stars === 5),undefined);
assertEqual(findKey(objectToTest, x => x.stars === 1),"Blue Hill");
assertEqual(findKey(objectToTest, x => x.stars === "tree"),undefined);



module.exports = findKey;
