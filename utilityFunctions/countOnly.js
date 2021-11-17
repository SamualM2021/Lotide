/**
* Given an array of items and the items we're interested in counting
* Return an object that reports the count of each item
* @param {the given array of items} allItems
* @param {the items we want to count} itemsToCount
* @returns Object
*/
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;
