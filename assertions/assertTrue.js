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

module.exports = assertTrue;
