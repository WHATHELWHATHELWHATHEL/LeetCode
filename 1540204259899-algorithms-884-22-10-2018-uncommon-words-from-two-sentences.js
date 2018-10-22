/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

const uncommonFromSentences = (paramString1, paramString2) => { // eslint-disable-line
  const words = paramString1.split(' ').concat(paramString2.split(' '));
  const countMap = words.reduce(
    (accu, word) => {
      if (!accu[word]) {
        accu[word] = 1;
        return accu;
      }
      accu[word] += 1;
      return accu;
    },
    {},
  );
  return Object.keys(countMap).map(
    key => ({ key, value: countMap[key] })
  ).filter(({ value }) => value === 1)
  .map(({ key }) => key);
};
