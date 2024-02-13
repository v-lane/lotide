
// implement function 'countOnly' to take in a collection of items
// return counts for a specific subset of items
// items are limited to strings
// countOnly given array and object, return object

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;