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

/**
 * This function asserts if the actual array is equivalent to the
 * expected array.
 * @param {the actual array} actual
 * @param {the expected array} expected
 */
const assertArraysEqual = function(actual, expected) {
  const assertionPassedMessage = `💚💚💚 Assertion Passed: ${actual} === ${expected}`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

const runTests = function() {
  console.log("EXPECTED PASSES - 3");
  assertArraysEqual([1, 2, 3], [1, 2, 3]);
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
  assertArraysEqual(null, null);

  console.log("EXPECTED FAILS - 4");
  assertArraysEqual([1, 2, 3], [3, 2, 1]);
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
  assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
  assertArraysEqual(null, [1, 2, 3]);
};

runTests();
