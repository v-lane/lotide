const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// implement function 'findKeyByValue'
// take object and value
// scan object, return first key which contains given value
// if no key found with value, return undefined


const findKeyByValue = function(object, value) {
  let result = undefined;

  for (let key in object) {
    if (object[key] === value) {
      result = key;
      break;
    }
  }
  return result;
};



const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  crime: "The Wire",
  drama: "The Wire"
};

//tests

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "crime");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "THE WIRE"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 12), undefined);
