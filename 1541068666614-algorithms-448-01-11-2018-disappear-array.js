/**
 * @param {number[]} nums
 * @return {number[]}
 */

// tricky way
const findDisappearedNumbers = (nums) => { // eslint-disable-line
  const numsSet = new Set(nums);
  const result = [];
  for (let index = 1; index <= nums.length; index += 1) {
    if (!numsSet.has(index)) {
      result.push(index);
    }
  }
  return result;
};
