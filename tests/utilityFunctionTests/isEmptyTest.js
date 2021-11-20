const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

describe("#isEmpty", () => {
  it("An empty array should be empty", () => {
    assert.isTrue(utilities.isEmpty([]));
  });
  it("An empty object should be empty", () => {
    assert.isTrue(utilities.isEmpty({}));
  });
  it("A non-empty array should not be empty", () => {
    assert.isFalse(utilities.isEmpty({a: 1, b: 2}));
  });
});
