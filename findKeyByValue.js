
// implement function 'findKeyByValue'
// take object and value
// scan object, return first key which contains given value
// if no key found with value, return undefined


const findKeyByValue = function(object, value) {
  let result = undefined;

  for (let key in object) {
    if (object[key] === value) {
      result = key;
      break;
    }
  }
  return result;
};

module.exports = findKeyByValue;