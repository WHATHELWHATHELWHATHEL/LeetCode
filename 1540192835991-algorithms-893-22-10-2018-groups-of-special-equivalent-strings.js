/**
 * @param {string[]} A
 * @return {number}
 */

const numSpecialEquivGroups = (strArray) => { // eslint-disable-line
  const processStrArray = strArray.map((str) => {
    const chars = str.split('');
    return {
      str,
      even: chars.filter((char, index) => index % 2 === 0).sort().join(''),
      odd: chars.filter((chars, index) => index % 2 === 1).sort().join(''),
    };
  });
  const resultMap = processStrArray.reduce(
    (accu, { str, even, odd }) => {
      if (accu[`${even}-${odd}`]) {
        accu[`${even}-${odd}`].push(str);
      } else {
        accu[`${even}-${odd}`] = [str];
      }
      return accu;
    },
    {},
  );
  return Object.values(resultMap).length;
};
