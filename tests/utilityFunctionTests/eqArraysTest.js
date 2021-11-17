const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  assertions.assertEqual(utilities.eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertions.assertEqual(utilities.eqArrays([1, 2, 3], [3, 2, 1]), false);
  assertions.assertEqual(utilities.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  assertions.assertEqual(utilities.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  assertions.assertEqual(utilities.eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  assertions.assertEqual(utilities.eqArrays(null, null), true);
  assertions.assertEqual(utilities.eqArrays(null, [1, 2, 3]), false);
};

runTests();
