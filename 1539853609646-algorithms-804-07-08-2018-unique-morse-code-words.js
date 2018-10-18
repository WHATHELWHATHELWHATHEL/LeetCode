/**
 * @param {string[]} words
 * @return {number}
 */

const charCodeOfA = 97;
const MORSE_LIST = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

const uniqueMorseRepresentations = (words) => {
  // get Map First
  const MORSE_MAP = MORSE_LIST
  .map(
    (morseCode, index) => ({
      code: morseCode,
      char: String.fromCharCode(charCodeOfA + index),
    })
  ).reduce(
    (map, { code, char }) => ({ ...map, [char]: code }),
    {},
  );
  // translate the words into morse code
  const wordsInMorseCode = words.map(
    word => (
      word.split('')
      .map(char => MORSE_MAP[char])
      .join('')
    )
  );
  // Then reduce them to a map to decimate the duplicate key
  const morseCodesMap = wordsInMorseCode.reduce(
    (accu, morseCode) => ({ ...accu, [morseCode]: true }),
    {},
  );
  // then get the keyss of the result object nad return its length
  return Object.keys(morseCodesMap).length;
};


// Test Ground
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
