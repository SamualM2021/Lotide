/**
* This function asserts if the expression is truthy
* @param {boolean} expression
*/
const assertTrue = function(expression) {
  const assertionPassedMessage = `💚💚💚 Assertion Passed: expression is true`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: expression is false`;
  if (expression) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

const runTests = function() {
  console.log("EXPECTED PASSES - 2");
  assertTrue(true);
  assertTrue(1 === 1);

  console.log("EXPECTED FAILS - 2");
  assertTrue(false);
  assertTrue(1 === 14);
};

runTests();
