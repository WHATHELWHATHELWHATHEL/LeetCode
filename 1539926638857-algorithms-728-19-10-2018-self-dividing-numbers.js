/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const createList = (left, right) => (
  [...Array((right - left) + 1).keys()].map((number, index) => left + index)
);

const hasZero = number => `${number}`.includes('0');

const checkSelfDivide = number => `${number}`.split('').map(c => parseInt(c, 10))
.reduce(
  (isSelfDivide, digit) => isSelfDivide && number % digit === 0,
  true,
);

const selfDividingNumbers = (left, right) => ( // eslint-disable-line
  createList(left, right)
  .filter(number => !hasZero(number))
  .reduce(
    (accu, number) => (checkSelfDivide(number) ? accu.concat(number) : accu),
    [],
  )
);
