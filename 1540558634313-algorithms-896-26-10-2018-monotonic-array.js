/**
 * @param {number[]} A
 * @return {boolean}
 */

const isMonotonic = (array) => { // eslint-disable-line
  const isMontonicIncrease = array.reduce(
    ({ isMontonic, prevNumber }, number) => ({
      isMontonic: isMontonic && prevNumber <= number,
      prevNumber: number,
    }),
    { isMontonic: true, prevNumber: -1 * Infinity },
  ).isMontonic;
  const isMontonicDecrease = array.reduce(
    ({ isMontonic, prevNumber }, number) => ({
      isMontonic: isMontonic && prevNumber >= number,
      prevNumber: number,
    }),
    { isMontonic: true, prevNumber: Infinity },
  ).isMontonic;
  console.log(isMontonicIncrease);
  console.log(isMontonicDecrease);
  return isMontonicIncrease || isMontonicDecrease;
};
