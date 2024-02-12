const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(["1", "2", 3]), ["2"]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([true, false, true, false, true, false]), [true, false]);
