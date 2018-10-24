/**
 * @param {string[]} ops
 * @return {number}
 */

const calPoints = (ops) => { // eslint-disable-line
  const changeEachRound = ops.reduce(
    (accu, str, index) => {
      const { validIndexes, changeEachRound } = accu;
      const validIndexesCount = validIndexes.length;
      const value = parseInt(str, 10);
      if (!isNaN(value)) {
        return {
          validIndexes: validIndexes.concat([index]),
          changeEachRound: changeEachRound.concat([value]),
        };
      } else if (str === 'C') {
        const validIndexesCount = validIndexes.length;
        const lastIndex = validIndexes[validIndexesCount - 1];
        const lastValue = changeEachRound[lastIndex];
        return {
          validIndexes: validIndexes.slice(0, validIndexesCount - 1),
          changeEachRound: changeEachRound.concat([-1 * lastValue]),
        };
      } else if (str === 'D') {
        const validIndexesCount = validIndexes.length;
        const lastIndex = validIndexes[validIndexesCount - 1];
        const lastValue = changeEachRound[lastIndex];
        return {
          validIndexes: validIndexes.concat([index]),
          changeEachRound: changeEachRound.concat([lastValue * 2]),
        };
      }
      // operator +
      const lastIndex = validIndexes[validIndexesCount - 1];
      const lastValue = changeEachRound[lastIndex];
      const nextLastIndex = validIndexes[validIndexesCount - 2];
      const nextLastValue = changeEachRound[nextLastIndex];
      if (isNaN(lastValue) || isNaN(nextLastValue)) {
        return accu;
      }
      return {
        validIndexes: validIndexes.concat([index]),
        changeEachRound: changeEachRound.concat([lastValue + nextLastValue]),
      };
    },
    {
      validIndexes: [],
      changeEachRound: [],
    },
  ).changeEachRound;
  const result = changeEachRound.reduce((sum, val) => sum + val, 0);
  return result;
};

// test case
// calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']);
// calPoints(['5', '2', '3', 'D']);
