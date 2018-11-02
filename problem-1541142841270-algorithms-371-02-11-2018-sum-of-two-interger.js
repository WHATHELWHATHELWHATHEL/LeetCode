/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/* eslint-disable quote-props */

// 获得比特串
const getBitStingsHelper = (value, prevList) => {
  if (value === 0) {
    return prevList;
  }
  const digit = value % 2;
  const remain = Math.floor(value / 2);
  return getBitStingsHelper(remain, prevList.unshift(digit));
};

const getBitString = (value) => {
  // 获得值的绝对值的列表
  const result = getBitStingsHelper(Math.abs(value), []);
  const temp = result.map(s => s === 0 ? 1 : 0).reverse();
};

const addMap = {
  '00': '0',
  '01': '1',
  '10': '1',
  '11': '0+',
};

const bitsAdd = (bitsA, bitsB) => {
  const reverseA = bitsA.reverse();
  const reverseB = bitsB.reverse();
  const shortestLength = reverseA.length > reverseB.length ? reverseB.length : reverseA.length;
  const longestList = reverseA.length > reverseB.length ? reverseA : reverseB;
  let enterBit = '0';
  let index = 0;
  for (; index < shortestLength; index += 1) {
    const aBit = reverseA[index];
    const bBit = reverseB[index];
    const addResult = addMap[`${aBit}${bBit}`];
    if (addResult.includes('+')) {
      const finalBits = addMap[`0${enterBit}`];
      longestList[index] = finalBits;
      enterBit = '1';
    } else {
      const withEnterBit = addMap[`${addResult}${enterBit}`];
      if (withEnterBit.includes('+')) {
        enterBit = '1';
      } else {
        enterBit = '0';
      }
      longestList[index] = withEnterBit.slice(0, 1);
    }
  }
  if (enterBit === '1') {
    longestList[index] = '1';
  }
  return longestList.reverse().join('');
};

const getSum = (a, b) => { // eslint-disable-line
};
