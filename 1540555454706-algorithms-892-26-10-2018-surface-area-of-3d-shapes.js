/**
 * @param {number[][]} grid
 * @return {number}
 */

// obvious solution
// const getIndex = (x, y, z) => `${x}-${y}-${z}`;
//
// const surfaceArea = (grid) => { // eslint-line-disable
//   // processed into a list of nodes
//   // {
//   //   x-y-z: true
//   // }
//   const nodes = grid.reduce(
//     (accu, line, y) => {
//       line.forEach((height, x) => {
//         for (let z = 0; z < height; z += 1) {
//           accu.push({ x, y, z });
//         }
//       });
//       return accu;
//     },
//     [],
//   );
//   // then createa hit map
//   const coordHitMap = nodes.reduce(
//     (accu, { x, y, z }) => {
//       accu[getIndex(x, y, z)] = true;
//       return accu;
//     },
//     {},
//   );
//   const totalSize = nodes.reduce(
//     (count, { x, y, z }) => (
      // count + [
      //   coordHitMap[getIndex(x + 1, y, z)],
      //   coordHitMap[getIndex(x - 1, y, z)],
      //   coordHitMap[getIndex(x, y + 1, z)],
      //   coordHitMap[getIndex(x, y - 1, z)],
      //   coordHitMap[getIndex(x, y, z + 1)],
      //   coordHitMap[getIndex(x, y, z - 1)],
      // ].filter(v => !v).length
//     ),
//     0,
//   );
//   return totalSize;
// };

const getHeight = (grid, x, y) => (grid[y] ? (grid[y][x] || 0) : 0);

const surfaceArea = (grid) => { // eslint-disable-line
  const yRange = grid.length;
  let surfaceSize = 0;
  for (let y = 0; y < yRange; y += 1) {
    const xRange = grid[y].length;
    for (let x = 0; x < xRange; x += 1) {
      // bottom and top contribute 2
      const height = grid[y][x];
      if (height > 0) {
        surfaceSize += 2;
        const heightGap1 = height - getHeight(grid, x, y + 1);
        const heightGap2 = height - getHeight(grid, x, y - 1);
        const heightGap3 = height - getHeight(grid, x + 1, y);
        const heightGap4 = height - getHeight(grid, x - 1, y);
        surfaceSize += heightGap1 > 0 ? heightGap1 : 0;
        surfaceSize += heightGap2 > 0 ? heightGap2 : 0;
        surfaceSize += heightGap3 > 0 ? heightGap3 : 0;
        surfaceSize += heightGap4 > 0 ? heightGap4 : 0;
      }
    }
  }
  return surfaceSize;
};
