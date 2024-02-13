
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('given 2 equal arrays, returns true', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.deepEqual(eqArrays(arr1, arr2), true);
  });
  it('given 2 different arrays, returns false', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["1", "2", "3"];
    assert.deepEqual(eqArrays(arr1, arr2), false);
  });
  it('given 2 empty arrays, returns true', () => {
    const arr1 = [];
    const arr2 = [];
    assert.deepEqual(eqArrays(arr1, arr2), true);
  });
});

