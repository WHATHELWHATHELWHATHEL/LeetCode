/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

const getCharCount = (string) => {
  const countObject = {};
  string.toLowerCase().split('')
  .filter(char => /[a-zA-Z]/.test(char))
  .forEach((char) => {
    if (countObject[char] === undefined) {
      countObject[char] = 0;
    }
    countObject[char] += 1;
  });
  return countObject;
};

const shortestCompletingWord = (licensePlate, words) => { // eslint-disable-line
  const licenseMap = getCharCount(licensePlate);
  let result = '';
  words.forEach((word) => {
    const wordsCountMap = getCharCount(word);
    const isMatch = Object.keys(licenseMap).reduce(
      (prevIsMatch, key) => {
        const licenseCount = licenseMap[key];
        const wordCount = wordsCountMap[key];
        return prevIsMatch && (licenseCount <= wordCount);
      },
      true,
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
// shortestCompletingWord(
//   'GrC8950',
//   ['measure', 'other', 'every', 'base', 'according', 'level', 'meeting', 'none', 'marriage', 'rest']
// );
// shortestCompletingWord(
//   '1s3 PSt',
//   ['step', 'steps', 'stripe', 'stepple'],
// );
