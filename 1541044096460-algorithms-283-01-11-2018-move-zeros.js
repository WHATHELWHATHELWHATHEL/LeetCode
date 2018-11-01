/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// tricky way
const moveZeroes = (nums) => { // eslint-disable-line
  const numsLength = nums.length;
  const filteredList = nums.filter(value => value !== 0);
  const lengthDiff = numsLength - filteredList.length;
  for (let index = 0; index < lengthDiff; index += 1) {
    filteredList.push(0);
  }
  for (let index = 0; index < numsLength; index += 1) {
    nums[index] = filteredList[index];
  }
};
