const assert = require('chai').assert;
const tail = require('../tail');


describe("#Tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns [] for ['Labs']", () => {
    assert.deepEqual(tail(['Labs']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
