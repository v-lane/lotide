const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('given object and value, return key', () => {
    const object = { sciFi: "The Expanse", crime: "The Wire", drama: "The Wire" };
    const value = "The Wire";
    assert.strictEqual(findKeyByValue(object, value), "crime");
  });
  it('given empty value, return undefined', () => {
    const object = { sciFi: "The Expanse", crime: "The Wire", drama: "The Wire" };
    const value = "";
    assert.strictEqual(findKeyByValue(object, value), undefined);
  });
  it('given empty object, return undefined', () => {
    const object = {};
    const value = "The Expanse";
    assert.strictEqual(findKeyByValue(object, value), undefined);
  });

});
