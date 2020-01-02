/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */


// 简单版本的
const kClosest = (points, K) => {
  const distances = points.map(([x, y]) => ({
    x,
    y,
    distance: (x * x)+(y * y),
  })).sort(({ distance: d1 }, { distance: d2 }) => {
    if (d1 === d2) {
      return 0;
    }
    if (d1 > d2) {
      return 1;
    }
    return -1;
  });
  return distances.slice(0, K).map(({ x, y }) => [x, y]);
};

// 效率提升版本的

const kClosest = (points, K) => {
  const distances = points.map(([x, y]) => ({
    x,
    y,
    distance: (x * x)+(y * y),
  })).sort(({ distance: d1 }, { distance: d2 }) => {
    if (d1 === d2) {
      return 0;
    }
    if (d1 > d2) {
      return 1;
    }
    return -1;
  });
  return distances.slice(0, K).map(({ x, y }) => [x, y]);
};

// // test case 1
// console.log(
//   kClosest(
//     [[3,3],[5,-1],[-2,4]],
//     2,
//   )
// );

// // test case 2
// console.log(
//   kClosest(
//     [[1,3],[-2,2]],
//     1,
//   )
// );
