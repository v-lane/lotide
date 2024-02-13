
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns empty object when given empty array", () => {
    assert.deepEqual(countOnly([], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {});
  });
  it('returns object when given ["Karl", "Jason", "Karmina"],{"Jason": true, "Karima": false, "Fang": false, "Agouhanna": false})', () => {
    assert.deepEqual(countOnly(["Karl", "Jason", "Karmina"], { "Jason": true, "Karima": false, "Fang": false, "Agouhanna": false }), { Jason: 1 });
  });
  it('returns empty object when given ["Karl", "Jason", "Karmina"],{"Jason": false, "Karima": false, "Fang": false, "Agouhanna": false})', () => {
    assert.deepEqual(countOnly(["Karl", "Jason", "Karmina"], { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false }), {});
  });
});

