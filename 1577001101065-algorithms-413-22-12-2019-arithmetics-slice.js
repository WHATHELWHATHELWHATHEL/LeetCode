/**
 * @param {number[]} A
 * @return {number}
 */

const getDiffList = (list) => {
  const subList = list.slice(1, list.length);
  return subList.map((item, index) => item - list[index]);
};

const numberOfArithmeticSlices = (list) => {

  // ge diff array here
  const diffList = getDiffList(list);

  // divided them out
  const dividedList = diffList.reduce(
    (accu, item, index) => {
      if (index === 0) {
        return [[item]];
      }
      const lastList = accu[accu.length - 1];
      const lastElement = lastList[lastList.length - 1];
      if (item === lastElement) {
        lastList.push(item);
      } else {
        accu.push([item]);
      }
      return accu;
    },
    [],
  );

  // then count them
  const count = dividedList.reduce(
    (sum, list) => {
      // total count of possible continued sub list
      const subListCount = ((list.length + 1) * (list.length)) / 2;
      // remove all the sublist count with length n
      const validSublistCount = subListCount - list.length;
      return sum + validSublistCount;
    },
    0,
  );

  return count;

};


// test case here
// console.log(numberOfArithmeticSlices([1,2,3,4,5,7,9,11, -9, -29]));
// console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
