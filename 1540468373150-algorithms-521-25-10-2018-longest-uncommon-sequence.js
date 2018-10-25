/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const findLUSlength = (string1, string2) => { // eslint-disable-line
  // length not the same, the longest string must be the LUS string
  if (string1.length !== string2.length) {
    return string1.length > string2.length ? string1.length : string2.length;
  }
  // both string are same length
  // if both string is same, no longest, so -1
  // if strings are different, two longest subsequence has same length, so return length
  return string1 === string2 ? -1 : string1.length;
};
