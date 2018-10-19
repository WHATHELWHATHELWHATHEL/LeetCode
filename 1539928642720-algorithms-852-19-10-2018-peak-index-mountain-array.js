/**
 * @param {number[]} list
 * @return {number}
 */

const peakIndexInMountainArray = list => ( // eslint-disable-line
  list.reduce(
    ({ maxValue, index: prevIndex }, number, index) => (
      number > maxValue ? { maxValue: number, index } : { maxValue, index: prevIndex }
    ),
    { maxValue: -1, index: -1 },
  ).index
);
