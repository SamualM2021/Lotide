const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  assertions.assertArraysEqual(utilities.middle(null), []);
  assertions.assertArraysEqual(utilities.middle([1]), []);
  assertions.assertArraysEqual(utilities.middle([1,2]), []);
  assertions.assertArraysEqual(utilities.middle([1, 2, 3]), [2]);
  assertions.assertArraysEqual(utilities.middle([1, 2, 3, 4, 5]), [3]);
  assertions.assertArraysEqual(utilities.middle([1, 2, 3, 4]), [2, 3]);
  assertions.assertArraysEqual(utilities.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
};

runTests();
