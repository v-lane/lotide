const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to take in a sentence as a string
// return count of each of the letters in that sentsnce

const countLetters = function(sentence) {
  if (typeof sentence !== "string") {
    return;
  }

  let noSpaceSentence = sentence.split(" ").join("");
  const lettersCount = {};

  for (let letter of noSpaceSentence) {
    if (!lettersCount[letter]) {
      lettersCount[letter] = 1;
    } else {
      lettersCount[letter] += 1;
    }
  }
  return lettersCount;
}

assertEqual(countLetters("Happy Birthday Baby")["h"],1);
assertEqual(countLetters("Happy Birthday Baby")["B"],2);
assertEqual(countLetters(),undefined);
assertEqual(countLetters([1, 2, 3]),undefined);
assertEqual(countLetters(12345),undefined);
assertEqual(countLetters(true),undefined);

