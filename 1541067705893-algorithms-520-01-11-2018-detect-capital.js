/**
 * @param {string} word
 * @return {boolean}
 */

const detectCapitalUse = (word) => { // eslint-disable-line
  const chars = word.split('');
  const isAllUpperCase = chars.reduce(
    (prevResult, char) => prevResult && /[A-Z]/.test(char),
    true,
  );
  const isAllLowerCase = chars.reduce(
    (prevResult, char) => prevResult && /[a-z]/.test(char),
    true,
  );
  const isFirstCapital = /[A-Z]/.test(word[0]) && chars.slice(1, chars.length).reduce(
    (prevResult, char) => prevResult && /[a-z]/.test(char),
    true,
  );
  return isAllUpperCase || isAllLowerCase || isFirstCapital;
};
