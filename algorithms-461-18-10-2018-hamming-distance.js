/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const createBitString = (x) => {
  let operator  = x;
  let string = '';
  do {
    const bit = operator % 2;
    string = `${bit}${string}`;
  } while (operator > 1);
}

const hammingDistance = (x, y) => {

};
