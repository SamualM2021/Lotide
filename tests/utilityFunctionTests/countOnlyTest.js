const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const firstResult = utilities.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

const runTests = function() {
  assertions.assertEqual(firstResult["Jason"], 1);
  assertions.assertEqual(firstResult["Karima"], undefined);
  assertions.assertEqual(firstResult["Fang"], 2);
  assertions.assertEqual(firstResult["Agouhanna"], undefined);
};

runTests();