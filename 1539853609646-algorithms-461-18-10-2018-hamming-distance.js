/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const hammingDistance = (x, y) => { // eslint-disable-line
  let xIterator = x;
  let yIterator = y;
  let count = 0;
  while (xIterator > 1 || yIterator > 1) {
    if (xIterator % 2 !== yIterator % 2) {
      count += 1;
    }
    xIterator = Math.floor(xIterator / 2);
    yIterator = Math.floor(yIterator / 2);
  }
  return xIterator !== yIterator ? count + 1 : count;
};
