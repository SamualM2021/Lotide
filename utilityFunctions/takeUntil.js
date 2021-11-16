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
 * This function returns a slice of array until callback returns a truthy value
 * @param {the array we are slicing elements from} array
 * @param {a function that determines when we stop taking} callback
 * @returns {an array} results
 */
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

const runTests = function() {
  const casinoWinnings = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const movieQuotes = ["You", "shall", "not", "pass!", ",", "Tis", "but", "a", "scratch"];
  assertArraysEqual(takeUntil(casinoWinnings, winning => winning < 0), [1, 2, 5, 7, 2]);
  assertArraysEqual(takeUntil(movieQuotes, quote => quote === ','), ["You", "shall", "not", "pass!"]);
  assertArraysEqual(takeUntil(casinoWinnings, winning => winning > 1000), [1, 2, 5, 7, 2, -1, 2, 4, 5]);
};

runTests();
