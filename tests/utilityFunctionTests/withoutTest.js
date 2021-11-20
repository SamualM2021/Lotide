const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");
const words = ["hello", "world", "lighthouse"];
utilities.without(words, ["lighthouse"]); // no need to capture return value for this test case

describe("#without", () => {
  it("[1, 2 , 3] without 1 should return [2, 3]", () => {
    assert.deepEqual(utilities.without([1, 2, 3], [1]), [2, 3]);
  });
  it("['1', '2', '3'] without [1 , 2 , '3'] should return ['1', '2'", () => {
    assert.deepEqual(utilities.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("null input should return null", () => {
    assert.deepEqual(utilities.without(null, [1]), null);
  });
  it("[1, 2] without null should return [1, 2]", () => {
    assert.deepEqual(utilities.without([1,2], null), [1,2]);
  });
  it("does words remain unchanged", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
