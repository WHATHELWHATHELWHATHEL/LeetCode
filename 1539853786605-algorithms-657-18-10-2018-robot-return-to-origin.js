/**
 * @param {string} moves
 * @return {boolean}
 */

const judgeCircle = (moves) => { // eslint-disable-line
  let ups = 0;
  let downs = 0;
  let lefts = 0;
  let rights = 0;
  for (let index = 0; index < moves.length; index += 1) {
    switch (moves[index]) {
      case 'U':
        ups += 1;
        break;
      case 'D':
        downs += 1;
        break;
      case 'L':
        lefts += 1;
        break;
      case 'R':
        rights += 1;
        break;
      default:
        break;
    }
  }
  return (ups === downs) && (lefts === rights);
};
