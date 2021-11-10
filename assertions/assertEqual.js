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

const runTests = function() {
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual("Matching Text", "Matching Text");
  assertEqual(1, 1);
  assertEqual(1, 14);
};

runTests();
