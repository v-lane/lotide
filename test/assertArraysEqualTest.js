const assertArraysEqual = require('../assertArraysEqual');

//check for accuracy
assertArraysEqual([], []); //pass
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //fail
assertArraysEqual([true, false, true], [true, false, "true"]); //fail
assertArraysEqual([1, 2, 3], [1, 2]); //fail
