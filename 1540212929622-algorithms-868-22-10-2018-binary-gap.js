/**
 * @param {number} N
 * @return {number}
 */

const createBinaryIndexMap = (number, seq) => {
  if (number === 0) {
    return seq;
  }
  const digit = number % 2;
  seq.unshift(digit);
  return createBinaryIndexMap(Math.floor(number / 2), seq);
};

const binaryGap = (number) => { // eslint-disable-line
  const binarys = createBinaryIndexMap(number, []);
  const { list } = binarys.reduce(
    ({ lastIndexOfDigit1, list }, digit, index) => {
      if (digit === 1) {
        if (lastIndexOfDigit1 < 0) {
          return { lastIndexOfDigit1: index, list };
        }
        const gap = index - lastIndexOfDigit1;
        return {
          lastIndexOfDigit1: index,
          list: list.concat([gap]),
        };
      }
      return { lastIndexOfDigit1, list };
    },
    {
      lastIndexOfDigit1: -1,
      list: [],
    },
  );
  if (list.length <= 0) {
    return 0;
  }
  return Math.max(...list);
};
