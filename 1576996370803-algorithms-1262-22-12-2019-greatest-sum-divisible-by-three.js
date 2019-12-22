/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSumDivThree = (nums) => {
  let remain0Max = 0;
  let remain1Max = -Infinity;
  let remain2Max = -Infinity;

  for (let index = 0; index < nums.length; index += 1) {
    const item = nums[index];
    const remain0MaxTemp = remain0Max + item;
    const remain1MaxTemp = remain1Max + item;
    const remain2MaxTemp = remain2Max + item;

    // 上一轮的余 0 的最大值，加上这一轮的数字之后，看其变成了是余 0，还是余 1，还是余 2
    // 之后更新后的值，和之前的最大余 0，余 1，余 2，比较，进行更新
    if (remain0MaxTemp % 3 === 0 && remain0MaxTemp > remain0Max) {
      remain0Max = remain0MaxTemp;
    }
    if (remain0MaxTemp % 3 === 1 && remain0MaxTemp > remain1Max) {
      remain1Max = remain0MaxTemp;
    }
    if (remain0MaxTemp % 3 === 2 && remain0MaxTemp > remain2Max) {
      remain2Max = remain0MaxTemp
    }

    // 上一轮的余 1 的最大值，加上这一轮的数字之后，看其变成了是余 0，还是余 1，还是余 2
    // 之后更新后的值，和之前的最大余 0，余 1，余 2，比较，进行更新
    if (remain1MaxTemp % 3 === 0 && remain1MaxTemp > remain0Max) {
      remain0Max = remain1MaxTemp;
    }
    if (remain1MaxTemp % 3 === 1 && remain1MaxTemp > remain1Max) {
      remain1Max = remain1MaxTemp;
    }
    if (remain1MaxTemp % 3 === 2 && remain1MaxTemp > remain2Max) {
      remain2Max = remain1MaxTemp
    }

    // 上一轮的余 2 的最大值，加上这一轮的数字之后，看其变成了是余 0，还是余 1，还是余 2
    // 之后更新后的值，和之前的最大余 0，余 1，余 2，比较，进行更新
    if (remain2MaxTemp % 3 === 0 && remain2MaxTemp > remain0Max) {
      remain0Max = remain2MaxTemp;
    }
    if (remain2MaxTemp % 3 === 1 && remain2MaxTemp > remain1Max) {
      remain1Max = remain2MaxTemp;
    }
    if (remain2MaxTemp % 3 === 2 && remain2MaxTemp > remain2Max) {
      remain2Max = remain2MaxTemp
    }
  }

  // 处理完成之后，加上最后一轮的结果
  return remain0Max;
};

// test case
// console.log(maxSumDivThree([3,6,5,1,8]));
