/**
* Returns the map of values that perform the callback function on the given array
* @param {the given array to map} array
* @param {the given callback to use on the array} callback
* @returns
*
*/
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
