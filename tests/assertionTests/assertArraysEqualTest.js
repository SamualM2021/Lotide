const assertArraysEqual = require("../../assertions/assertArraysEqual");

const runTests = function() {
  console.log("EXPECTED PASSES - 3");
  assertArraysEqual([1, 2, 3], [1, 2, 3]);
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
  assertArraysEqual(null, null);

  console.log("EXPECTED FAILS - 4");
  assertArraysEqual([1, 2, 3], [3, 2, 1]);
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
  assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
  assertArraysEqual(null, [1, 2, 3]);
};

runTests();