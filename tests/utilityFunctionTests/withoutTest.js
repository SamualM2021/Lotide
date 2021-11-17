const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  assertions.assertArraysEqual(utilities.without([1, 2, 3], [1]), [2, 3]);
  assertions.assertArraysEqual(utilities.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  assertions.assertArraysEqual(utilities.without(null, [1]), null);
  assertions.assertArraysEqual(utilities.without([1,2], null), [1,2]);
  //Does Original Array remain unchanged?
  const words = ["hello", "world", "lighthouse"];
  utilities.without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertions.assertArraysEqual(words, ["hello", "world", "lighthouse"]);
};

runTests();
