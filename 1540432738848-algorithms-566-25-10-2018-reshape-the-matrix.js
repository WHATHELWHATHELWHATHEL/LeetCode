/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

const matrixReshape = (nums, r, c) => { // eslint-disable-line
  const matrixCount = nums.reduce(
    (sum, line) => sum + line.length,
    0,
  );
  const newMatrixCount = r * c;
  // original data lost, return original matrix
  if (newMatrixCount !== matrixCount) {
    return nums;
  }
  const oldMatrixInColumn = nums.reduce(
    (accu, line) => accu.concat(line),
    [],
  );
  const newMatrix = [...Array(r).keys()].map(
    () => [...Array(c).keys()]
  );
  oldMatrixInColumn.forEach((item, index) => {
    const x = index % c;
    const y = Math.floor(index / c);
    newMatrix[y][x] = item;
  });
  return newMatrix;
};
