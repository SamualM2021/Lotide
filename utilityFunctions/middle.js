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

const isOdd = function(numericValue) {
  return numericValue % 2;
};
/**
* Given an input array retrieves the middle element(s)
* @param {*} inputArray
* @returns array with the middle most element(s)
*/
const middle = function(inputArray) {
  let middleArray = [];
  let index = 0;
  if (inputArray === null || inputArray.length <= 2) {
    return middleArray;
  } else {
    const arraySize = inputArray.length;
    index = Math.floor(arraySize / 2);
    if (isOdd(arraySize)) {
      middleArray.push(inputArray[index]);
    } else {
      //0-based index so we grab index-1, index
      middleArray.push(inputArray[index - 1]);
      middleArray.push(inputArray[index]);
    }
  }
  return middleArray;
};


const runTests = function() {
  assertArraysEqual(middle(null), []);
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1,2]), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
};

runTests();
