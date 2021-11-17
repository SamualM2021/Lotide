/**
 * This function returns true if the given arrays are perfect
 * matches of each other
 * @param {the first array to check} firstArray
 * @param {the second array to check} secondArray
 * @returns boolean
 */
const eqArrays = function(firstArray, secondArray) {
  if (firstArray !== null && secondArray !== null) {
    const isSameLength = firstArray.length === secondArray.length;
    const doesArraysMatch = isSameLength && firstArray.every(
      (value, index) => value === secondArray[index]);
    return doesArraysMatch;
  } else {
    return firstArray === secondArray;
  }
};

module.exports = eqArrays;
