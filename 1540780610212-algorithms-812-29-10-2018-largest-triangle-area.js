/**
 * @param {number[][]} points
 * @return {number}
 */

// formula to calculate the size
const calculateSize = (p1, p2, p3) => (
  0.5 * Math.abs(
    (
      (p1[0] * p2[1]) +
      (p2[0] * p3[1]) +
      (p3[0] * p1[1])
    ) -
    (p2[0] * p1[1]) -
    (p3[0] * p2[1]) -
    (p1[0] * p3[1])
  )
);

// brutal force version
const largestTriangleArea = (points) => { // eslint-disable-line
  let largetest = -1;
  const length = points.length;
  for (let index1 = 0; index1 < length; index1 += 1) {
    for (let index2 = 0; index2 < length; index2 += 1) {
      for (let index3 = 0; index3 < length; index3 += 1) {
        const currentSize = calculateSize(
          points[index1], points[index2], points[index3],
        );
        if (currentSize > largetest) {
          largetest = currentSize;
        }
      }
    }
  }
  return largetest;
};
