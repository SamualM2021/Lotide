/**
* This function scans the object and returns the first key when the callback return a truthy value
* Otherwise this returns undefined
* @param {the given object} object
* @param {the callback to use to check the key} callback
* @returns {either undefined or} key
*/
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(key)) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
