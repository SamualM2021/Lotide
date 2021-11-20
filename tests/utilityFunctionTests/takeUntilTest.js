const assert = require('chai').assert;
const utilities = require("../../utilityFunctions");

const casinoWinnings = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const movieQuotes = ["You", "shall", "not", "pass!", ",", "Tis", "but", "a", "scratch"];

//Just to clean up tests
const didLoseMoney = winning => winning < 0;
const isCommaSeparator = quote => quote === ',';
const isJackpot = winning => winning >= 1000;

describe("#takeUntil", () => {
  it("takeUntil we lose money should return [1, 2, 5, 7, 2]", () => {
    assert.deepEqual(utilities.takeUntil(casinoWinnings, didLoseMoney), [1, 2, 5, 7, 2]);
  });
  it("takeUntil our Movie Quote is a comma should return ['You', 'shall', 'not', 'pass!'']", () => {
    assert.deepEqual(utilities.takeUntil(movieQuotes, isCommaSeparator), ["You", "shall", "not", "pass!"]);
  });
  it("takeUntil we win 1000 returns the entire list", () => {
    assert.deepEqual(utilities.takeUntil(casinoWinnings, isJackpot), [1, 2, 5, 7, 2, -1, 2, 4, 5]);
  });
});
