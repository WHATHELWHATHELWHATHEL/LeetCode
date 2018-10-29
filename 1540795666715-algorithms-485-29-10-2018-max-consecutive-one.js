/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = (nums) => ( // eslint-disable-line
  nums.reduce(
    (accu, digit) => {
      if (accu.length === 0) {
        if (digit === 0) {
          accu.push({ digit, count: 0 });
        } else {
          accu.push({ digit, count: 1 });
        }
      } else {
        if (digit === 0) {
          accu.push({ digit, count: 0 });
        } else {
          const lastElement = accu[accu.length - 1];
          if (lastElement.digit === digit) {
            accu.push({ digit, count: lastElement.count + 1 });
          } else {
            accu.push({ digit, count: 1 });
          }
        }
      }
      return accu;
    },
    [],
  ).reduce(
    (largest, { count }) => (count > largest ? count : largest),
    0,
  )
);
