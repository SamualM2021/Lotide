const assertEqual = require("../../assertions/assertEqual");

const runTests = function() {
  console.log("EXPECTED PASSES - 2");
  assertEqual(1, 1);
  assertEqual("Matching Text", "Matching Text");

  console.log("EXPECTED FAILS - 2");
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 14);
};

runTests();