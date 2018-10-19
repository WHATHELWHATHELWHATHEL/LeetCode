/**
 * @param {number[][]} grid
 * @return {number}
 */

const projectionArea = (grid) => { // eslint-disable-line
  // parse the grid to three dimension of each node
  const nodeCoords = grid.reduce(
    (accu, singleLine, x) => accu.concat(
      singleLine.reduce(
        (singleLineAccu, height, y) => (
          singleLineAccu.concat(
            [...Array(height).keys()].map(z => ({ x, y, z }))
          )
        ),
        [],
      ),
    ),
    [],
  );
  // calculate XY projection
  const hitsOnXYPlane = nodeCoords.reduce(
    (result, { x, y }) => {
      result[`${x}-${y}`] = true;
      return result;
    },
    {},
  );
  const xyProjection = Object.keys(hitsOnXYPlane).length;
  // calculate XZ projection
  const hitsOnXZPlane = nodeCoords.reduce(
    (result, { x, z }) => {
      result[`${x}-${z}`] = true;
      return result;
    },
    {},
  );
  const xzProjection = Object.keys(hitsOnXZPlane).length;
  // calculate YZ projection
  const hitsOnYZPlane = nodeCoords.reduce(
    (result, { y, z }) => {
      result[`${y}-${z}`] = true;
      return result;
    },
    {},
  );
  const yzProjection = Object.keys(hitsOnYZPlane).length;
  return xyProjection + yzProjection + xzProjection;
};
