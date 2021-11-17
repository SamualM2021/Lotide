const eqArrays = require('../utilityFunctions/eqArrays');

/**
* This function asserts if the actual array is equivalent to the
* expected array.
* @param {the actual array} actual
* @param {the expected array} expected
*/
const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const assertionPassedMessage = `💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqArrays(actual, expected)) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

module.exports = assertArraysEqual;
