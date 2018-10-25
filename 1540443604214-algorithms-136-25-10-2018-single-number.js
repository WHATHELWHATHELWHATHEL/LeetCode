/**
 * @param {number[]} nums
 * @return {number}
 */
/* eslint-disable no-bitwise */
// use bool type, idot!
// a^c^c = a
// so simplely ^ all, all the other elements will be useless
const singleNumber = numbers => ( // eslint-disable-line
  numbers.reduce((num, item) => num ^ item, 0)
);
