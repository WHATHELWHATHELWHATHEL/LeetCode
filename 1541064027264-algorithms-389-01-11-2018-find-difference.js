/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

/* eslint-disable no-bitwise */

const findTheDifference = (S, T) => { // eslint-disable-line
  const s = S.split('').sort().join('');
  const t = T.split('').sort().join('');
  if (s[0] !== t[0]) {
    return t[0];
  }
  let diffChar = '';
  const length = s.length;
  for (let index = 1, sAccu = s[0], tAccu = t[0]; index < length; index += 1) {
    const sChar = s[index];
    const tChar = t[index];
    sAccu = `${sAccu}${sChar}`;
    tAccu = `${tAccu}${tChar}`;
    if (sAccu !== tAccu) {
      diffChar = tChar;
      break;
    }
  }
  if (diffChar === '') {
    diffChar = t[t.length - 1];
  }
  return diffChar;
};
