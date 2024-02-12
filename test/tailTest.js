

const assertEqual = require('../assertEqual');
const tail = require('../tail');



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const emptyArr = [];
const resultEmpt = tail(emptyArr);
assertEqual(resultEmpt[0], undefined);