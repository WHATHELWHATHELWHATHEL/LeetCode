/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */

const nextGreaterElement = (findNums, nums) => { // eslint-disable-line
  // create Index map
  const numsIndexHitMap = nums.reduce(
    (accu, number, index) => {
      accu[number] = index;
      return accu;
    },
    {},
  );
  return findNums.map((number) => {
    const indexInNums = numsIndexHitMap[number];
    let result = -1;
    for (let index = indexInNums + 1; index < nums.length; index += 1) {
      if (nums[index] > number) {
        result = nums[index];
        break;
      }
    }
    return result;
  });
};
