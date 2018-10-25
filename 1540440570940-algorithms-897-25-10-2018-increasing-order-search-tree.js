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

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

const preOrderSequence = (root, accu) => {
  if (root.left) {
    preOrderSequence(root.left, accu);
  }
  accu.push(root.val);
  if (root.right) {
    preOrderSequence(root.right, accu);
  }
  return accu;
};

const buildLeftTree = (val, remainSortedList) => {
  const newNode = new TreeNode(val);
  if (remainSortedList.length === 0) {
    return newNode;
  }
  newNode.right = buildLeftTree(
    remainSortedList[0],
    remainSortedList.slice(1, remainSortedList.length)
  );
  return newNode;
};

const increasingBST = (root) => { // eslint-disable-line
  const seq = preOrderSequence(root, []);
  return buildLeftTree(seq[0], seq.slice(1, seq.length));
};

// test gound
// const testTree = {
//   val: 4,
//   right: {
//     val: 6,
//     right: {
//       val: 7,
//     },
//     left: {
//       val: 5,
//     },
//   },
//   left: {
//     val: 2,
//     right: {
//       val: 3,
//     },
//     left: {
//       val: 1,
//     },
//   },
// };
//
// increasingBST(testTree);
