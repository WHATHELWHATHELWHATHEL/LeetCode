/**
 * @param {number} n
 * @return {number}
 */

const subtractProductAndSum = n => (
  `${n}`.split('').map(digit => parseInt(digit, 10)).reduce((accu, digit) => accu * digit, 1)
  -
  `${n}`.split('').map(digit => parseInt(digit, 10)).reduce((accu, digit) => accu + digit, 0)
);

// test case
// console.log(subtractProductAndSum(4421));
