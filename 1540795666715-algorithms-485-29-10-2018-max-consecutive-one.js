/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = (nums) => { // eslint-disable-line
  const processList = nums.reduce(
    (accu, value) => {
      if (value === 0) {
        accu.push({ value, count: -10 });
        return accu;
      }
      if (accu.length <= 1) {
        accu.push({ value, count: 1 });
        return accu;
      }
      const lastElement = accu[accu.length - 1];
      if (lastElement.value === value) {
        accu.push({ value, count: lastElement.count + 1 });
        return accu;
      }
      accu.push({ value, count: 1 });
      return accu;
    },
    [],
  );
  let largestCount = -1;
  const length = processList.length;
  for (let index = 0; index < length; index += 1) {
    if (processList[index].count > largestCount) {
      largestCount = processList[index].count;
    }
  }
  return largestCount;
};
