/**
 * @param {number[]} nums
 * @return {boolean}
 */

const createPartitionList = (paramOriginList, paramSubList) => {
  let subList = [...paramSubList];
  let originList = [...paramOriginList];
  while(subList.length > 0) {
    const firstValue = subList.shift();
    const targetIndex = originList.findIndex(item => item === firstValue);
    originList = originList.slice(0, targetIndex).concat(originList.slice(targetIndex + 1, originList.length));
  }
  return originList;
};

const canPartition = (nums) => {
  const diffSet = {};
  const sum = nums.reduce((accu, item) => accu + item, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  diffSet[sum / 2] = true;
  for (let index = 0; index < nums.length; index += 1) {
    const allTargetGoalValues = Object.keys(diffSet);
    for (let innerIndex = 0; innerIndex < allTargetGoalValues.length; innerIndex += 1) {
      const diff = allTargetGoalValues[innerIndex] - nums[index];
      if (diff === 0) {
        return true;
      }
      if (diff > 0) {
        diffSet[diff] = true;
      }
    }
  }
  return false;
};

// test case
// console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 2, 3, 5]));
// console.log(canPartition([-1, 3, 3, 5]));


