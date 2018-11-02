/**
 * @param {string} s
 * @return {number}
 */

// brutal force way, fail to pass time limit
// const isAllSame = (s, value) => {
//   const length = s.length;
//   let result = true;
//   for (let index = 0; index < length; index += 1) {
//     result = result && s[index] === value;
//     if (!result) {
//       break;
//     }
//   }
//   return result;
// };
//
// const isBinaryDivide = (str) => {
//   const length = str.length;
//   if (length === 0) {
//     return false;
//   }
//   if (length % 2 === 1) {
//     return false;
//   }
//   const isHeadAll1 = isAllSame(str.slice(0, length / 2), '1');
//   const isHeadAll0 = isAllSame(str.slice(0, length / 2), '0');
//   const isTailAll1 = isAllSame(str.slice(length / 2, length), '1');
//   const isTailAll0 = isAllSame(str.slice(length / 2, length), '0');
//   return (isHeadAll1 && isTailAll0) || (isHeadAll0 && isTailAll1);
// };
//
// const countBinarySubstrings = (s) => { // eslint-disable-line
//   let result = 0;
//   const length = s.length;
//   for (let index = 0; index <= length; index += 1) {
//     for (let codeIndex = index; codeIndex <= length; codeIndex += 1) {
//       const substr = s.slice(index, codeIndex);
//       if (isBinaryDivide(substr)) {
//         result += 1;
//       }
//     }
//   }
//   return result;
// };

// real quick way
const countBinarySubstrings = (s) => { // eslint-disable-line
  if (s.length <= 1) {
    return 0;
  }
  let preRun = 0;
  let curRun = 1;
  let count = 0;
  const length = s.length;
  for (let i = 1; i < length; i++) {
    if (s[i - 1] === s[i]) {
      curRun++;
    } else {
      preRun = curRun;
      curRun = 1;
    }
    if (preRun >= curRun) {
      count++;
    }
  }
  return count;
};

// for a part like 0000111101
// during the first four digits,
// their get currRun = 4 preFun = 0
// then it goes to '1'
// curRun = 1, prevRun = 4
// next 4 run, since prevRun >= currRun, count increase
// similiarly get 01 0011, 000111, 0000111
// then goes to final part '0'
