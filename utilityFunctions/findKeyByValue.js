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

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  comedySciFi: "Resident Alien",
  canadianSciFi: "Orphan Black"
};

/**
 * Helper function to check if object is empty
 * @param {the given object} object
 * @returns
 */
const isEmpty = function(object) {
  return (object === null || object.length === 0);
};

/**
 * Returns the first key which contains the given value. If no keyFound
 * then we return undefined
 * @param {the given object we're operating on} inputObject
 * @param {the value of interest} value
 * @returns first key || undefined
 */
const findKeyByValue = function(inputObject, value) {
  if (value === null || isEmpty(inputObject)) {
    return undefined;
  }
  //Note currently this assumes case sensitive input so a value of X
  //mapped to key Y will return undefined if value is x
  return Object.keys(inputObject).find(key => inputObject[key] === value);
};

const runTests = function() {
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Fairy Tail"), undefined);
  assertEqual(findKeyByValue([], "The Wire"), undefined);
  assertEqual(findKeyByValue(null, "The Wire"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, null), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Resident Alien"), "comedySciFi");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Orphan Black"), "canadianSciFi");
};

runTests();
