const { assert } = require("chai");
const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  assertions.assertTrue(utilities.isEmpty([]));
  assertions.assertTrue(utilities.isEmpty({}));
  assertions.assertFalse(utilities.isEmpty({a: 1, b: 2}));

}

runTests();
