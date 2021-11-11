/**
* This function asserts if the expression is falsey
* @param {boolean} expression
*/
const assertFalse = function(expression) {
  const assertionPassedMessage = `💚💚💚 Assertion Passed: expression is false`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: expression is true`;
  if (!expression) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

const runTests = function() {
  assertFalse(true);
  assertFalse(false);
  assertFalse(1 === 1);
  assertFalse(1 === 14);
};

runTests();
