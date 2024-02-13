const assert = require('chai').assert;
const flatten = require('../flatten');


describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns [["a", "b", "c", false] when given ["a", "b", [], "c", false]', () => {
    assert.deepEqual(flatten(["a", "b", [], "c", false]), ["a", "b", "c", false]);
  });
  it('returns [] when given []', () => {
    assert.deepEqual(flatten([]), []);
  });
});

