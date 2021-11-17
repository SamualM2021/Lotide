const isEmpty = require('../utilityFunctions/isEmpty');

/**
 * Returns the first key which contains the given value. If no keyFound
 * then we return undefined
 * @param {the given object we're operating on} inputObject
 * @param {the value of interest} value
 * @returns first key || undefined
 */
const findKeyByValue = function(inputObject, value) {
  if (value === null || isEmpty(inputObject)) {
    return undefined;
  }
  //Note currently this assumes case sensitive input so a value of X
  //mapped to key Y will return undefined if value is x
  return Object.keys(inputObject).find(key => inputObject[key] === value);
};

module.exports = findKeyByValue;
