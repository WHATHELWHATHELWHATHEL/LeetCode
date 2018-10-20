/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const searchBST = (root, val) => { // eslint-disable-line
  if (root === null) {
    return [];
  }
  if (root.val === val) {
    return root;
  }
  return val > root.val ? searchBST(root.right, val) : searchBST(root.left, val);
};
