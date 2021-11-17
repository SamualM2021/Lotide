/**
* Helper function to check if object is empty
* @param {the given object} object
* @returns
*/
const isEmpty = function(object) {
  return (object === null || object.length === 0 || Object.keys(object).length === 0);
};

module.exports = isEmpty;
