/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = (s) => ( // eslint-disable-line
  s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
);
