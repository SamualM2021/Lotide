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
  }

  return true;
};

const runTests = function() {
  const firstTestObject = { a: "1", b: "2" };
  const secondTestObject = { b: "2", a: "1" };
  const thirdTestObject = { a: "1", b: "2", c: "3" };
  const firstDeepTestObject = { a: "1", b: { message: "YES"}, c: "3" };
  const secondDeepTestObject = { a: "1", b: { message: "YES"}, c: "3" };
  const thirdDeepTestObject = { a: "1", b: { message: "NO"}, c: "3" };
  const firstArrayTestObject = { c: "1", d: ["2", 3] };
  const secondArrayTestObject = { d: ["2", 3], c: "1" };
  const thirdArrayTestObject = { c: "1", d: ["2", 3, 4] };
  assertTrue(eqObjects(firstTestObject, secondTestObject));
  assertFalse(eqObjects(firstTestObject, thirdTestObject));
  assertFalse(eqObjects(null, []));
  assertTrue(eqObjects(null, null));
  assertTrue(eqObjects({}, {}));
  assertFalse(eqObjects(firstTestObject, thirdDeepTestObject));
  assertTrue(eqObjects(firstDeepTestObject, secondDeepTestObject));
  assertFalse(eqObjects(firstDeepTestObject, thirdDeepTestObject));
  assertTrue(eqObjects(firstArrayTestObject, secondArrayTestObject));
  assertFalse(eqObjects(firstArrayTestObject, thirdArrayTestObject));
};

runTests();
