const assertTrue = require("../../assertions/assertTrue");

const runTests = function() {
  console.log("EXPECTED PASSES - 2");
  assertTrue(true);
  assertTrue(1 === 1);

  console.log("EXPECTED FAILS - 2");
  assertTrue(false);
  assertTrue(1 === 14);
};

runTests();
