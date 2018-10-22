/**
 * @param {number} num
 * @return {number}
 */

const findHelper = (number, s) => {
  if (number === 0) {
    return s;
  }
  const nextNumber = Math.floor(number / 2);
  const digit = number % 2 === 1 ? 0 : 1;
  return findHelper(nextNumber, `${digit}${s}`);
};

const findComplement = (number) => ( // eslint-disable-line
  parseInt(findHelper(number, ''), 2)
);
