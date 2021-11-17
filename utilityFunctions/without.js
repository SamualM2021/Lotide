/**
 * This removes the given items from the input array
 * @param {the input array} inputArray
 * @param {the items to remove} itemsToRemoveArray
 * @returns array
 */
const without = function(inputArray, itemsToRemoveArray) {
  let copiedArray = inputArray;
  if (copiedArray !== null && itemsToRemoveArray !== null) {
    copiedArray = copiedArray.filter(function(element) {
      return !itemsToRemoveArray.includes(element);
    });
  }
  return copiedArray;
};

module.exports = without;
