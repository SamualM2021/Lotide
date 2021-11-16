/**
 * This function asserts if the actual value is equivalent to the
 * expected value.
 * @param {the actual value} actual
 * @param {the expected value} expected
 */
const assertEqual = function(actual, expected) {
  const assertionPassedMessage = `💚💚💚 Assertion Passed: ${actual} === ${expected}`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

module.exports = assertEqual;
