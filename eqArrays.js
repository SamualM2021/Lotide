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
 * This function returns true if the given arrays are perfect
 * matches of each other
 * @param {the first array to check} firstArray
 * @param {the second array to check} secondArray
 * @returns boolean
 */
const eqArrays = function(firstArray, secondArray) {
  if (firstArray !== null && secondArray !== null) {
    const isSameLength = firstArray.length === secondArray.length;
    const doesArraysMatch = isSameLength && firstArray.every(
      (value, index) => value === secondArray[index]);
    return doesArraysMatch;
  } else {
    return firstArray === secondArray;
  }
};

const runTests = function() {
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  assertEqual(eqArrays(null, null), true);
  assertEqual(eqArrays(null, [1, 2, 3]), false);
};

runTests();
