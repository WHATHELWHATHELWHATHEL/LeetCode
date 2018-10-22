/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */

const shortestToChar = (string, specChar) => { // eslint-disable-line
  const indexedSpecChar = string.split('')
  .map((char, index) => ({ char, index }))
  .filter(({ char }) => char === specChar)
  .map(({ index }) => index);
  console.log(indexedSpecChar);
  return [...Array(string.length).keys()].reduce(
    (list, index) => {
      const distances = indexedSpecChar.map(specIndex => Math.abs(specIndex - index));
      const minDistance = Math.min(...distances);
      list.push(minDistance);
      return list;
    },
    [],
  );
};

// shortestToChar('loveleetcode', 'e');
