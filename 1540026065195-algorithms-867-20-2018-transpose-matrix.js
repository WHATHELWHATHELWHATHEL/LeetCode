/**
 * @param {number[][]} A
 * @return {number[][]}
 */

const transpose = function(matrix) { // eslint-disable-line
  const transposedMatrix = [];
  const yLength = matrix.length;
  for (let y = 0; y < yLength; y += 1) {
    const singleLine = matrix[y];
    const xLength = singleLine.length;
    for (let x = 0; x < xLength; x += 1) {
      if (!transposedMatrix[x]) {
        transposedMatrix[x] = [];
      }
      transposedMatrix[x][y] = matrix[y][x];
    }
  }
  return transposedMatrix;
};
