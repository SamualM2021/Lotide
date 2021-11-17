const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  comedySciFi: "Resident Alien",
  canadianSciFi: "Orphan Black"
};

const runTests = function() {
  assertions.assertEqual(utilities.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertions.assertEqual(utilities.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  assertions.assertEqual(utilities.findKeyByValue(bestTVShowsByGenre, "Fairy Tail"), undefined);
  assertions.assertEqual(utilities.findKeyByValue([], "The Wire"), undefined);
  assertions.assertEqual(utilities.findKeyByValue(null, "The Wire"), undefined);
  assertions.assertEqual(utilities.findKeyByValue(bestTVShowsByGenre, null), undefined);
  assertions.assertEqual(utilities.findKeyByValue(bestTVShowsByGenre, "Resident Alien"), "comedySciFi");
  assertions.assertEqual(utilities.findKeyByValue(bestTVShowsByGenre, "Orphan Black"), "canadianSciFi");
};

runTests();