/**
 * @param {number[]} candies
 * @return {number}
 */

const distributeCandies = (candies) => { // eslint-disable-line
  // only one array of candies, only one distrbute method,
  // no matter how sister can get only one
  if (candies.length === 2) {
    return 1;
  }
  // all kinds
  const candiesTotalKinds = (new Set(candies)).size;
  // best condition, less than half of the candies are identical
  // so sister can get most
  const mostOpt = candies.length / 2;
  // other case, more than half of candies are same
  // so sister can still get all the candies
  const common = candiesTotalKinds;
  // mostOpt is the best, all other conditions are no lager than it
  return Math.min(mostOpt, common);
};
