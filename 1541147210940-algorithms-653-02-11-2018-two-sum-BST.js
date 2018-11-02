/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

// dfs and set methods

const dfs = (root, onVisit) => {
  const stack = [root];
  let shouldStop = false;
  const stop = () => {
    shouldStop = true;
  };
  while (stack.length > 0 && !shouldStop) {
    const element = stack.pop();
    onVisit(element.val, stop);
    if (element.right) {
      stack.push(element.right);
    }
    if (element.left) {
      stack.push(element.left);
    }
  }
};

const findTarget = (root, k) => { // eslint-disable-line
  if (!root) {
    return false;
  }
  if (root === []) {
    return false;
  }
  const numberSet = new Set();
  let result = false;
  dfs(
    root,
    (val, stopFunc) => {
      const gap = k - val;
      if (numberSet.has(gap)) {
        result = true;
        stopFunc();
      }
      numberSet.add(val);
    },
  );
  return result;
};
