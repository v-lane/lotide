const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("given string 'hello bye', expected result at 'h' is [0]", () => {
    assert.deepEqual(letterPositions('hello bye')["h"], [0]);
  });
  it("given string 'hello bye', expected result at 'z' is undefined", () => {
    assert.deepEqual(letterPositions('hello bye')["z"], undefined);
  });
  it("given string 'hello bye', expected result at 'e' is [1, 8]", () => {
    assert.deepEqual(letterPositions('hello bye')["e"], [1, 8]);
  });
});
