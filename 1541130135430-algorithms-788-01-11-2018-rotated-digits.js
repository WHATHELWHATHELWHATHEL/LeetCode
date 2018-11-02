/**
 * @param {number} N
 * @return {number}
 */

const map = {
  0: '0',
  1: '1',
  2: '5',
  3: '&',
  4: '^',
  5: '2',
  6: '9',
  7: 'L',
  8: '8',
  9: '6',
};

const isRotate = (s) => {
  const list = s.split('');
  const length = list.length;
  for (let index = 0; index < length; index += 1) {
    list[index] = map[list[index]];
  }
  const finalString = list.join('');
  return !isNaN(finalString) && finalString !== s;
};

const rotatedDigits = (N) => { // eslint-disable-line
  let count = 0;
  for (let index = 1; index <= N; index += 1) {
    if (isRotate(`${index}`)) {
      count += 1;
    }
  }
  return count;
};

// rotatedDigits(10);
