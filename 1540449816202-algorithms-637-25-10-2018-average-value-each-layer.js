/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const averageOfLevels = (root) => { // eslint-disable-line
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const currLevelCount = queue.length;
    let temp = 0;
    for (let index = 0; index < currLevelCount; index += 1) {
      temp += queue[0].val;
      const item = queue.shift();
      if (item.right) {
        queue.push(item.right);
      }
      if (item.left) {
        queue.push(item.left);
      }
    }
    const average = temp / currLevelCount;
    result.push(average);
  }
  return result;
};
