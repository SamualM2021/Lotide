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

const bands = ["Linkin Park", "Evanescence", "Red Hot Chili Peppers", "D12", "Three Days Grace"];

/**
 * Returns the map of values that perform the callback function on the given array
 * @param {the given array to map} array
 * @param {the given callback to use on the array} callback
 * @returns
 *
 */
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(bands, band => band[0]);
console.log(results1);

/**
 * Custom Callback function to help test map. This one will determine
 * if a given band is a favourite
 * @param {the band to check} band
 * @returns
 */
const isInFavourites = function(band) {
  const favourites = ["Linkin Park", "Red Hot Chili Peppers", "D12"];
  return favourites.includes(band);
};

const runTests = function() {
  assertArraysEqual(map(bands, band => band.length), [11, 11, 21, 3, 16]);
  assertArraysEqual(map(bands, band => band[0]), ["L", "E", "R", "D", "T"]);
  assertArraysEqual(map(bands, band => isInFavourites(band)), [true, false, true, true, false]);
};

runTests();
