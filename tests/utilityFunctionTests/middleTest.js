const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

describe("#middle", () => {
  it("returns [] for null", () => {
    assert.deepEqual(utilities.middle(null), []);
  });

  it("returns [] for array of size 1", () => {
    assert.deepEqual(utilities.middle([1]), []);
  });

  it("returns [] for array of size 2", () => {
    assert.deepEqual(utilities.middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(utilities.middle([1, 2, 3]), [2]);
  });

  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(utilities.middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(utilities.middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5 , 6]", () => {
    assert.deepEqual(utilities.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

