/**
* Helper function to check if object is empty
* @param {the given object} object
* @returns
*/
const isEmpty = function(object) {
  return (object === null || object.length === 0);
};

/**
* Returns true if both objects have identical keys with identical values
* Otherwise returns false
* @param {an object} firstObject
* @param {an object} secondObject
* @returns boolean
*/
const eqObjects = function(firstObject, secondObject) {

  if (isEmpty(firstObject) && isEmpty(secondObject)) {
    return firstObject === secondObject;
  } else if (isEmpty(firstObject) || isEmpty(secondObject)) {
    return false;
  }

  for (const item in firstObject) {

    if (!!Object.getOwnPropertyDescriptors(firstObject, item) && !!Object.getOwnPropertyDescriptors(secondObject, item)) {
      if (Object.getOwnPropertyNames(firstObject).length !== Object.getOwnPropertyNames(secondObject).length) {
        return false;
      } else if (typeof firstObject[item] === 'object') {
        if (!eqObjects(firstObject[item], secondObject[item])) {
          return false;
        }
      } else {
        if (firstObject[item] !== secondObject[item]) {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  return true;
};

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


const firstTestObject = {awesome: "sauce", battle: "bots"};
const secondTestObject = {awesome: "sauce", battle: "bots"};
const thirdTestObject = {awesome: "sauce", battle: "batman"};
const fourthTestObject = {awesome: "sauce", battle: "bots", drink: "shots"};

//PASSES
console.log("EXPECTED PASSES - 1");
assertObjectsEqual(firstTestObject, secondTestObject);

//FAILS
console.log("EXPECTED FAILS - 2");
assertObjectsEqual(firstTestObject, thirdTestObject);
assertObjectsEqual(firstTestObject, fourthTestObject);

