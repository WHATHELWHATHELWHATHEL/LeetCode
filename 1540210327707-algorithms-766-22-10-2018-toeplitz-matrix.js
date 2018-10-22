/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

const isToeplitzMatrix = (matrix) => { // eslint-disable-line
  if (matrix.length <= 0) {
    return false;
  }
  let isToeplitz = true;
  const yLength = matrix.length;
  for (let y = 0; y < yLength - 1; y += 1) {
    const xLength = matrix[y].length;
    for (let x = 0; x < xLength; x += 1) {
      const currValue = matrix[y][x];
      if (x + 1 < xLength && y + 1 < yLength) {
        const nextValue = matrix[y + 1][x + 1];
        isToeplitz = isToeplitz && currValue === nextValue;
        if (!isToeplitz) {
          break;
        }
      }
    }
    if (!isToeplitz) {
      break;
    }
  }
  return isToeplitz;
};
