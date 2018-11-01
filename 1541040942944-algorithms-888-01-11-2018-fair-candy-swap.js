/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

// brutal force way
const fairCandySwap = (A, B) => { // eslint-disable-line
  const totalASize = A.reduce((sum, size) => sum + size, 0);
  const totalBSize = B.reduce((sum, size) => sum + size, 0);
  const result = [];
  A.forEach(aSize => B.forEach((bSize) => {
    const changedA = (totalASize - aSize) + bSize;
    const changedB = (totalBSize - bSize) + aSize;
    if (changedA === changedB) {
      result[0] = aSize;
      result[1] = bSize;
    }
  }));
  return result;
};
