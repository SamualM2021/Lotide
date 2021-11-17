const isEmpty = require('../utilityFunctions/isEmpty');

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

module.exports = eqObjects;
