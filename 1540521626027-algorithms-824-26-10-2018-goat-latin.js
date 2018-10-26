/**
 * @param {string} S
 * @return {string}
 */

const map = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true,
};

const isVowel = s => s && map[s[0]];

const toGoatLatin = (paramString) => { // eslint-disable-line
  const words = paramString.split(' ');
  return words.map(
    (word, index) => (
      isVowel(word) ? (
        `${word}ma${'a'.repeat(index + 1)}`
      ) : (
        `${word.slice(1, word.length)}${word[0]}ma${'a'.repeat(index + 1)}`
      )
    )
  ).join(' ');
};
