/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

// brutal force way
// const fairCandySwap = (A, B) => { // eslint-disable-line
//   const totalASize = A.reduce((sum, size) => sum + size, 0);
//   const totalBSize = B.reduce((sum, size) => sum + size, 0);
//   const result = [];
//   A.forEach(aSize => B.forEach((bSize) => {
//     const changedA = (totalASize - aSize) + bSize;
//     const changedB = (totalBSize - bSize) + aSize;
//     if (changedA === changedB) {
//       result[0] = aSize;
//       result[1] = bSize;
//     }
//   }));
//   return result;
// };

// smarter mathmatic way
// suppose we exchange candy x and y so they are same
// then Sa - x + y = Sb + x- y
// then y = x + (Sb - Sa) / 2
const fairCandySwap = (A, B) => { // eslint-disable-line
  const totalASize = A.reduce((sum, size) => sum + size, 0);
  const totalBSize = B.reduce((sum, size) => sum + size, 0);
  const processedA = A.map(value => value + ((totalBSize - totalASize) / 2));
  const bValueSet = new Set(B);
  const matchIndex = processedA.findIndex(item => bValueSet.has(item));
  const BValue = processedA[matchIndex];
  const AValue = A[matchIndex];
  return [AValue, BValue];
};
