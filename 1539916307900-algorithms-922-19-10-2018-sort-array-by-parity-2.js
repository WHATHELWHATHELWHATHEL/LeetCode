/**
 * @param {number[]} A
 * @return {number[]}
 */

const sortArrayByParityII = (list) => { // eslint-disable-line
  const oddList = list.filter(number => number % 2 === 1);
  const evenList = list.filter(number => number % 2 === 0);
  const length = list.length;
  const result = [];
  let oddPointer = 0;
  let evenPointer = 0;
  for (let index = 0; index < length; index += 1) {
    if (index % 2 === 0) {
      result[index] = evenList[evenPointer];
      evenPointer += 1;
    } else {
      result[index] = oddList[oddPointer];
      oddPointer += 1;
    }
  }
  return result;
};
