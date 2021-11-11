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
  console.log("EXPECTED PASSES - 2");
  assertFalse(1 === 14);
  assertFalse(false);

  console.log("EXPECTED FAILS - 2");
  assertFalse(1 === 1);
  assertFalse(true);
};

runTests();
