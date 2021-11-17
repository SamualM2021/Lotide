/**
 * This function returns a slice of array until callback returns a truthy value
 * @param {the array we are slicing elements from} array
 * @param {a function that determines when we stop taking} callback
 * @returns {an array} results
 */
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;
