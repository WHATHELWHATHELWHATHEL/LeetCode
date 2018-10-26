/**
 * @param {number[]} A
 * @return {boolean}
 */

const isMonotonic = (array) => { // eslint-disable-line
  const { isMontonicIncrease, isMontonicDecrease } = array.reduce(
    ({
      isMontonicIncrease,
      isMontonicDecrease,
      prevIncreaseNumber,
      prevDecreaseNumber,
    }, number) => ({
      isMontonicIncrease: isMontonicIncrease && number >= prevIncreaseNumber,
      isMontonicDecrease: isMontonicDecrease && number <= prevDecreaseNumber,
      prevIncreaseNumber: number,
      prevDecreaseNumber: number,
    }),
    {
      isMontonicIncrease: true,
      isMontonicDecrease: true,
      prevIncreaseNumber: -1 * Infinity,
      prevDecreaseNumber: Infinity,
    },
  );
  return isMontonicIncrease || isMontonicDecrease;
};
