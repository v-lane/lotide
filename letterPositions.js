

// function called letterPositions that takes in a sentence as a string
// and returns an object
// that shows all indices in the string where each character is found
// Each letter will return one or more numbers (indices)


const letterPositions = function(sentence) {
  if (typeof sentence !== "string") {
    return;
  }

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];

    if (key === " ") {
      continue;
    }

    if (!results[key]) {
      results[key] = [i];

    } else {
      results[key].push(i);
    }
  }
  return results;
};


module.exports = letterPositions;
