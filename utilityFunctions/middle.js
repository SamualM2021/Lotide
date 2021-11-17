/**
* Helper function to determine if a number is odd
* @param {the given number we're checking} numericValue
* @returns a truthy or falsey value
*/
const isOdd = function(numericValue) {
  return numericValue % 2;
};

/**
* Given an input array retrieves the middle element(s)
* @param {the given array to find the middle for} inputArray
* @returns array with the middle most element(s)
*/
const middle = function(inputArray) {
  let middleArray = [];
  let index = 0;
  if (inputArray === null || inputArray.length <= 2) {
    return middleArray;
  } else {
    const arraySize = inputArray.length;
    index = Math.floor(arraySize / 2);
    if (isOdd(arraySize)) {
      middleArray.push(inputArray[index]);
    } else {
      //0-based index so we grab index-1, index
      middleArray.push(inputArray[index - 1]);
      middleArray.push(inputArray[index]);
    }
  }
  return middleArray;
};

module.exports = middle;
