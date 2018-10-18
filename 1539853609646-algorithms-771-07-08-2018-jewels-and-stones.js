/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) { // eslint-disable-line
  const jewelsMap = J.split('').reduce(
    (accu, jewelsType) => ({ ...accu, [jewelsType]: true }),
    {},
  );
  const stones = S.split('');
  return stones.reduce(
    (jewelCount, stoneType) => (
      jewelsMap[stoneType] ? jewelCount + 1 : jewelCount
    ),
    0,
  );
};

// // Test Ground
// console.log(
//   numJewelsInStones(
//     "aA",
//     "aAAbbbb",
//   )
// );
