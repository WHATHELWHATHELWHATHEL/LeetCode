/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const swap = (node) => {
  if (!node) {
    return;
  }
  const temp = node.right;
  node.right = node.left;
  node.left = temp;
  if (node.left) {
    swap(node.left);
  }
  if (node.right) {
    swap(node.right);
  }
};

const invertTree = (root) => { // eslint-disable-line
  swap(root);
  return root;
};
