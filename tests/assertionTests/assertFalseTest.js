const assertFalse = require("../../assertions/assertFalse");

const runTests = function() {
  console.log("EXPECTED PASSES - 2");
  assertFalse(1 === 14);
  assertFalse(false);

  console.log("EXPECTED FAILS - 2");
  assertFalse(1 === 1);
  assertFalse(true);
};

runTests();
