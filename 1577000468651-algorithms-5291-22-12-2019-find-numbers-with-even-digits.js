/**
 * @param {number[]} nums
 * @return {number}
 */

const findNumbers = nums => nums.filter(number => `${number}`.length % 2 === 0).length;

// test case
// console.log(findNumbers([555,901,482,1771]));
