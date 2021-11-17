const assertions = require("../../assertions");
const utilities = require("../../utilityFunctions");

const runTests = function() {
  const casinoWinnings = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const movieQuotes = ["You", "shall", "not", "pass!", ",", "Tis", "but", "a", "scratch"];

  //Just to clean up tests
  const didLoseMoney = winning => winning < 0;
  const isCommaSeparator = quote => quote === ',';
  const isJackpot = winning => winning >= 1000;

  assertions.assertArraysEqual(utilities.takeUntil(casinoWinnings, didLoseMoney), [1, 2, 5, 7, 2]);
  assertions.assertArraysEqual(utilities.takeUntil(movieQuotes, isCommaSeparator), ["You", "shall", "not", "pass!"]);
  assertions.assertArraysEqual(utilities.takeUntil(casinoWinnings, isJackpot), [1, 2, 5, 7, 2, -1, 2, 4, 5]);
};

runTests();
