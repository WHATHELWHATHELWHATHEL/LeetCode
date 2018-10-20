/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

const smallestRangeI = (list, k) => { // eslint-disable-line
  if (list.length === 1) {
    return 0;
  }
  const largest = Math.max(...list);
  const smallest = Math.min(...list);
  // here we only use the difference
  return Math.max(0, largest - smallest - (2 * k));
};
