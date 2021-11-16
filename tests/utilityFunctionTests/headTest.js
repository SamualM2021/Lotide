const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  assertions.assertEqual(utilities.getHead(null), undefined);
  assertions.assertEqual(utilities.getHead([]), undefined);
  assertions.assertEqual(utilities.getHead([5, 6, 7]), 5);
  assertions.assertEqual(utilities.getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
};

runTests();