/**
 * @param {string} str
 * @return {string}
 */

// lower case lower bound a => 97
// lower case upper bound z => 122
// upper case lower bound A => 65
// upper case upper bound Z => 90

const isUpperCase = char => (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);

const toLowerCase = str => ( // eslint-disable-line
  str.split('')
  // convert the upper case
  .map(char => (
    isUpperCase(char) ? (
      String.fromCharCode(char.charCodeAt(0) + 32)
    ) : (
      char
    )
  ))
  .join('')
);

// Test Ground
// console.log(toLowerCase('Hello'));
// console.log(toLowerCase('here'));
// console.log(toLowerCase('LOVELY'));
// console.log(toLowerCase("al&phaBET"));
