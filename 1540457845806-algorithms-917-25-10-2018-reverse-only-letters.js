/**
 * @param {string} S
 * @return {string}
 */

// obvious version
const reverseOnlyLetters = (S) => { // eslint-disable-line
  const chars = S.split('').map((char, index) => ({ char, index }));
  const letters = chars.filter(({ char }) => /[a-zA-Z]/g.test(char));
  const symbols = chars.filter(({ char }) => !/[a-zA-Z]/g.test(char));
  const lettersLength = letters.length;
  for (let index = 0; index < Math.floor(lettersLength / 2); index += 1) {
    const temp = letters[index].index;
    letters[index].index = letters[lettersLength - index - 1].index;
    letters[lettersLength - index - 1].index = temp;
  }
  return symbols.concat(letters)
  .sort(({ index: i1 }, { index: i2 }) => i1 - i2)
  .map(({ char }) => char)
  .join('');
};

// test ground
// reverseOnlyLetters('ab-cd');
