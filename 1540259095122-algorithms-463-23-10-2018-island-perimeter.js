/**
 * @param {number[][]} grid
 * @return {number}
 */

// n2 basic method
const islandPerimeter = grid => ( // eslint-disable-line
  grid.reduce(
    (sum, line, y) => sum + line.reduce(
      (lineSum, cell, x) => {
        if (cell !== 1) {
          return lineSum;
        }
        const yLength = grid.length;
        const xLength = line.length;
        let result = 4;
        // isHeadLand
        if (y - 1 < 0 ? false : grid[y - 1][x] === 1) {
          result -= 1;
        }
        // isTailLand
        if (y + 1 >= yLength ? false : grid[y + 1][x] === 1) {
          result -= 1;
        }
        // isLeftLand
        if (x - 1 < 0 ? false : grid[y][x - 1] === 1) {
          result -= 1;
        }
        // isRightLand
        if (x + 1 >= xLength ? false : grid[y][x + 1] === 1) {
          result -= 1;
        }
        return lineSum + result;
      },
      0,
    ),
    0,
  )
);

// test ground
// islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
// islandPerimeter([]);
