const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("given 2 same objects, return true", () => {
    const obj1 = { colors: ["red", "blue"], size: "medium" };
    const obj2 = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });
  it("given 2 different objects of same length, return false", () => {
    const obj1 = { size: "medium", colors: ["red", "blue"] };
    const obj2 = { size: "medium", sleeveLength: "long" };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });
  it("given 2 different objects with same keys, return false", () => {
    const obj1 = { colors: ["red", "blue"], size: "medium" };
    const obj2 = { size: "medium", colors: ["yellow", "blue"] };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });
});


