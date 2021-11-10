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

/**
 * This removes the given items from the input array
 * @param {the input array} inputArray
 * @param {the items to remove} itemsToRemoveArray
 * @returns array
 */
const without = function(inputArray, itemsToRemoveArray) {
  let copiedArray = inputArray;
  if (copiedArray !== null && itemsToRemoveArray !== null) {
    copiedArray = copiedArray.filter(function(element) {
      return !itemsToRemoveArray.includes(element);
    });
  }
  return copiedArray;
};

const runTests = function() {
  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  assertArraysEqual(without(null, [1]), null);
  assertArraysEqual(without([1,2], null), [1,2]);
  //Does Original Array remain unchanged?
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
};

runTests();
