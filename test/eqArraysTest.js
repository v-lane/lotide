
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//tests

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3]), false);
assertEqual(eqArrays(["true", "2", "3"], [true, "2", 3]), false);
assertEqual(eqArrays(["true", "false", "happy"], ["true", "FALSE", "happy"]), false);
assertEqual(eqArrays([], []), true);

