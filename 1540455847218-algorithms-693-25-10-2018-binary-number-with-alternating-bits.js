/**
 * @param {number} n
 * @return {boolean}
 */
/* eslint-disable no-bitwise */
const createBitsString = (n, s) => {
  const nextValue = Math.floor(n / 2);
  const digit = n % 2;
  if (nextValue === 0) {
    return `${digit}${s}`;
  }
  return createBitsString(nextValue, `${digit}${s}`);
};

const hasAlternatingBits = (n) => { // eslint-disable-line
  const bits = createBitsString(n, '').split('').map(i => parseInt(i, 10));
  let hasAlternating = true;
  bits.reduce((prevBits, currBits) => {
    if (prevBits === currBits) {
      hasAlternating = false;
    }
    return currBits;
  });
  return hasAlternating;
};
