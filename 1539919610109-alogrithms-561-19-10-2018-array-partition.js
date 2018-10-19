/**
 * @param {number[]} nums
 * @return {number}
 */

const arrayPairSum = nums => ( // eslint-disable-line
  nums.sort((n1, n2) => {
    if (n1 === n2) {
      return 0;
    }
    if (n1 > n2) {
      return 1;
    }
    return -1;
  })
  .reduce(
    (sum, number, index) => {
      if (index % 2 === 1) {
        return sum;
      }
      return sum + nums[index];
    },
    0,
  )
);

// test ground
// console.log(arrayPairSum([1, 4, 3, 2]));
