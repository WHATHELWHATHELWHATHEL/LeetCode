/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// matrix method
// const getSwapArray = (length) => {
//   const totalLength = length * length;
//   const swapMatrix = [];
//   // create a flat swap matrix
//   for (let step = 0; step < totalLength; step += 1) {
//     swapMatrix.push(0);
//   }
//   // set the swap
//   for (let x = 0; x < length; x += 1) {
//     swapMatrix[x + ((length - x - 1) * length)] = 1;
//   }
//   return swapMatrix;
// };
//
// const matrixMultiplay = (m1, m2, length) => {
//   const results = '0'.repeat(length).split('');
//   for (let y = 0; y < length; y += 1) {
//     for (let x = 0; x < length; x += 1) {
//       let singleCell = 0;
//       for (let step = 0; step < length; step += 1) {
//         singleCell += m1[(y * length) + step] * m2[(step * length) + x];
//       }
//       results[(y * length) + x] = singleCell;
//     }
//   }
//   return results;
// };
//
// const flipAndInvertImage = (A) => { // eslint-disable-line
//   const length = A.length;
//   // flat the matrix
//   const matrix = A.reduce((accu, line) => accu.concat(line), []);
//   // swap matrix
//   const swapMatrix = getSwapArray(length);
//   // horizontally swapped
//   const horizontallySwapped = matrixMultiplay(matrix, swapMatrix, length);
//   return horizontallySwapped.map(number => (number + 1) % 2).reduce(
//     (accu, number, index) => {
//       if (index % length === 0) {
//         accu.push([number]);
//         return accu;
//       }
//       const lastIndex = accu.length - 1;
//       accu[lastIndex].push(number);
//       return accu;
//     },
//     [],
//   );
// };

// reverse method
const flipAndInvertImage = (A) => { // eslint-disable-line
  const length = A.length;
  for (let index = 0; index < length; index += 1) {
    A[index] = A[index].reverse().map(number => (number + 1) % 2);
  }
  return A;
};
