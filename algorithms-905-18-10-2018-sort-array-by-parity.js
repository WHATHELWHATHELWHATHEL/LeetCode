/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = list => (
  list.reduce(
    (accu, number) => {
      if (number % 2 === 0) {
        accu.unshift(number);
      } else {
        accu.push(number);
      }
      return accu;
    },
    [],
  )
);
