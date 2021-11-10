const assertEqual = function(actual, expected) {
  const assertionPassedMessage = `💚💚💚 Assertion Passed: ${actual} === ${expected}`;
  const assertionFailedMessage = `💔💔💔 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(assertionPassedMessage);
  } else {
    console.log(assertionFailedMessage);
  }
};

const getHead = function(inputArray) {
  return inputArray[0];
};

const runTests = function() {
  assertEqual(getHead([5, 6, 7]), 5);
  assertEqual(getHead(["Hello", "Lighthouse", "Labs"]), "Hello");
};

runTests();
