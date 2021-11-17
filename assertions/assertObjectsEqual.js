const eqObjects = require('../utilityFunctions/eqObjects');

/**
* This function asserts if the actual object is equivalent to the
* expected object.
* @param {the actual array} actual
* @param {the expected array} expected
*/
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const assertionPassedMessage = `💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

module.exports = assertObjectsEqual;
