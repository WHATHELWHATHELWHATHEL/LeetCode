/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

const getCharCount = (string, isReverse) => {
  const countObject = {};
  string.toLowerCase().split('')
  .filter(char => /[a-zA-Z]/.test(char))
  .forEach((char) => {
    if (countObject[char] === undefined) {
      countObject[char] = 0;
    }
    if (isReverse) {
      countObject[char] += 1;
    } else {
      countObject[char] -= 1;
    }
  });
  return countObject;
};

const shortestCompletingWord = (licensePlate, words) => { // eslint-disable-line
  const licenseMap = getCharCount(licensePlate);
  let result = {

  };
  words.forEach((word) => {
    const wordsCountMap = getCharCount(word);
    const matchCount = Object.keys(licenseMap).reduce(
      (prevCount, key) => {
        const licenseCount = licenseMap[key];
        const wordCount = wordsCountMap[key];
        if (licenseCount === wordCount) {
          return prevCount + wordCount;
        }
        return prevCount;
      },
      0,
    );
    const isResultEmpty = result === '';
    const isShorter = word.length < result.length;
    if (isMatch && (isResultEmpty || isShorter)) {
      result = word;
    }
  });
  return result;
};

// test ground
// shortestCompletingWord(
//   'Ah71752',
//   ['suggest', 'letter', 'of', 'husband', 'easy', 'education', 'drug', 'prevent', 'writer', 'old'],
// );
