/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const getSequence = (node, seq) => {
  if (!node.left && !node.right) {
    seq.push(node.val);
    return seq;
  }
  let currSeq = seq;
  if (node.left) {
    currSeq = getSequence(node.left, currSeq);
  }
  if (node.right) {
    currSeq = getSequence(node.right, currSeq);
  }
  return currSeq;
};

const leafSimilar = (root1, root2) => { // eslint-disable-line
  const seq1 = getSequence(root1, []).join('');
  const seq2 = getSequence(root2, []).join('');
  return seq1 === seq2;
};
