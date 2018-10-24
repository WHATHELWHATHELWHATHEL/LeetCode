/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => { // eslint-disable-line
  const list = [...Array(n + 1).keys()].slice(1, n + 1).map(v => `${v}`);
  for (let index3 = 2; index3 < list.length; index3 += 3) {
    if (!isNaN(list[index3])) {
      list[index3] = 'Fizz';
    }
  }
  for (let index5 = 4; index5 < list.length; index5 += 5) {
    if (!isNaN(list[index5])) {
      list[index5] = 'Buzz';
    } else {
      list[index5] = 'FizzBuzz';
    }
  }
  return list;
};
