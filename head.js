//test case - determines if actual equals expected
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//returns first element of an array
const head = function(array) {
  return array[0];
}


//test code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([],undefined));
assertEqual(head([1]),1);
assertEqual(head([1,2,3]),1);
assertEqual(head(["1","2"]),"1");