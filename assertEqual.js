const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//test code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("12", 12);
assertEqual(true, "true");
assertEqual("apple","paple");
assertEqual(11,1);
assertEqual("apple","apple");

