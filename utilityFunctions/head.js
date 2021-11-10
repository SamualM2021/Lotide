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

/**
 * Retrieves the head of the given array
 * @param {the input array} inputArray
 * @returns
 */
const getHead = function(inputArray) {
  return inputArray[0];
};

const runTests = function() {
  assertEqual(getHead([5, 6, 7]), 5);
  assertEqual(getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
};

runTests();
