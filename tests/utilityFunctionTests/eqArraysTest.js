const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

describe("#eqArrays", () => {
  it("[1 , 2 , 3] is equal to [1 , 2 , 3]", () => {
    assert.isTrue(utilities.eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("['1' , '2' , '3'] is equal to ['1' , '2' , '3']", () => {
    assert.isTrue(utilities.eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("null equals null", () => {
    assert.isTrue(utilities.eqArrays(null, null));
  });
  it("[3 , 2 , 1] is not equal to [1 , 2 , 3]", () => {
    assert.isFalse(utilities.eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("['1' , '2' , 3] is not equal to ['1' , '2' , '3']", () => {
    assert.isFalse(utilities.eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
  it("[1 , 2 , 3, 4] is not equal to [1 , 2 , 3]", () => {
    assert.isFalse(utilities.eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });
  it("null is not equal to ['1' , '2' , '3']", () => {
    assert.isFalse(utilities.eqArrays(null, [1, 2, 3]));
  });
});
