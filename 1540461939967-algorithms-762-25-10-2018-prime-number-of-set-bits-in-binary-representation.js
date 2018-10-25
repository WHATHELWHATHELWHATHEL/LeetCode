/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const getBinarySeq = (n, accu) => {
  const nextValue = Math.floor(n / 2);
  const bit = n % 2;
  if (nextValue === 0) {
    return [bit, ...accu];
  }
  return getBinarySeq(nextValue, [bit, ...accu]);
};

const getSettingBitCount = (n, count) => {
  const nextValue = Math.floor(n / 2);
  const bit = n % 2;
  if (nextValue === 0) {
    return bit === 1 ? count + 1 : count;
  }
  return getSettingBitCount(nextValue, bit === 1 ? count + 1 : count);
};

const primeMap = {
  2: true,
  3: true,
  5: true,
  7: true,
  11: true,
  13: true,
  17: true,
  19: true,
};

// brutal force
const isPrimeNumber = checkNumber => !!primeMap[checkNumber];

const countPrimeSetBits = (L, R) => { // eslint-disable-line
  const accu = [];
  for (let index = L; index <= R; index += 1) {
    accu.push(getSettingBitCount(index, 0));
  }
  return accu.map(val => isPrimeNumber(val)).filter(isPrime => isPrime).length;
};
