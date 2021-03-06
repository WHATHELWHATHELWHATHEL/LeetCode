/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

const trimBST = (root, L, R) => { // eslint-disable-line
  if (root === null) {
    return null;
  }
  const val = root.val;
  if (val < L) {
    return trimBST(root.right, L, R);
  }
  if (val > R) {
    return trimBST(root.left, L, R);
  }
  root.right = trimBST(root.right, L, R);
  root.left = trimBST(root.left, L, R);
  return root;
};
