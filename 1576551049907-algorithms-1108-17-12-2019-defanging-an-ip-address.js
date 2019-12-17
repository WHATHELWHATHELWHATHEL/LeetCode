/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
  return address.replace(/\./g, '[.]');
};

// test cases
// console.log(defangIPaddr('1.1.1.1'));
// console.log(defangIPaddr('255.100.50.0'));
