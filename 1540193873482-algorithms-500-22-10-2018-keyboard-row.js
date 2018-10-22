/**
 * @param {string[]} words
 * @return {string[]}
 */

const KEY_ROW_MAP = {
  q: 3,
  w: 3,
  e: 3,
  r: 3,
  t: 3,
  y: 3,
  u: 3,
  i: 3,
  o: 3,
  p: 3,
  a: 1,
  s: 1,
  d: 1,
  f: 1,
  g: 1,
  h: 1,
  j: 1,
  k: 1,
  l: 1,
  z: 2,
  x: 2,
  c: 2,
  v: 2,
  b: 2,
  n: 2,
  m: 2,
  Q: 3,
  W: 3,
  E: 3,
  R: 3,
  T: 3,
  Y: 3,
  U: 3,
  I: 3,
  O: 3,
  P: 3,
  A: 1,
  S: 1,
  D: 1,
  F: 1,
  G: 1,
  H: 1,
  J: 1,
  K: 1,
  L: 1,
  Z: 2,
  X: 2,
  C: 2,
  V: 2,
  B: 2,
  N: 2,
  M: 2,
};

const findWords = words => ( // eslint-disable-line
  words.reduce(
    (accu, word) => {
      const isSameline = word.split('').reduce(
        (lineIndex, char) => {
          if (isNaN(lineIndex)) {
            return lineIndex;
          }
          return KEY_ROW_MAP[char] === lineIndex ? lineIndex : NaN;
        },
        KEY_ROW_MAP[word[0]],
      );
      return isSameline ? accu.concat(word) : accu;
    },
    [],
  )
);
