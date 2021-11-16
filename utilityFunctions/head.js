/**
 * Retrieves the head of the given array
 * @param {the input array} inputArray
 * @returns
 */
const getHead = function(inputArray) {
  return (inputArray && inputArray.length) ? inputArray[0] : undefined;
};

module.exports = getHead;
