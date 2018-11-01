/**
 * @param {number} num
 * @return {number}
 */

const getSum = num => `${num}`.split('')
.map(v => parseInt(v, 10))
.reduce(
  (prev, value) => prev + value
);

const addDigits = (num) => { // eslint-disable-line
  let result = num;
  do {
    result = getSum(result);
  } while (result >= 10);
  return result;
};
