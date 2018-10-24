/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => { // eslint-disable-line
  const list = [...Array(n).keys()];
  return list.map((number) => {
    const value = number + 1;
    const divide3 = value % 3 === 0;
    const divide5 = value % 5 === 0;
    if (divide3 && divide5) {
      return 'FizzBuzz';
    }
    if (divide3) {
      return 'Fizz';
    }
    if (divide5) {
      return 'Buzz';
    }
    return `${value}`;
  });
};
