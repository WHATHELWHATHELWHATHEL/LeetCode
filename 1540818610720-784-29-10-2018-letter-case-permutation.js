/**
 * @param {string} S
 * @return {string[]}
 */

const createHelper = (currString, rest, currentResult) => {
  if (rest.length === 0) {
    currentResult[currString] = true;
  } else {
    const first = rest[0];
    createHelper(`${currString}${first.toLowerCase()}`, rest.substr(1), currentResult);
    createHelper(`${currString}${first.toUpperCase()}`, rest.substr(1), currentResult);
  }
};

const letterCasePermutation = (inputString) => { // eslint-disable-line
  const result = {};
  createHelper('', inputString, result);
  return Object.keys(result);
};
