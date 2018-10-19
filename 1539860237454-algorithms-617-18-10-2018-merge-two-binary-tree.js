/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

const preTraverse = (node1, node2, rawNode) => {
  if (node1.left || node2.left) {
    rawNode.left = new TreeNode(0);
    preTraverse(node1.left || new TreeNode(0), node2.left || new TreeNode(0), rawNode.left);
  }
  rawNode.val = node1.val + node2.val;
  if (node1.right || node2.right) {
    rawNode.right = new TreeNode(0);
    preTraverse(node1.right || new TreeNode(0), node2.right || new TreeNode(0), rawNode.right);
  }
  return rawNode;
};

const mergeTrees = (t1, t2) => {  // eslint-disable-line
  if (!t1 && !t2) {
    return [];
  }
  if (!t1 || !t2) {
    return t1 || t2;
  }
  return preTraverse(t1, t2, new TreeNode(0));
};
