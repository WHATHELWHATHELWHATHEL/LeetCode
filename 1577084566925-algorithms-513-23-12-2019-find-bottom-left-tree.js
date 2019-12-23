/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const isLeaf = node => !node.left && !node.right;

// dfs 遍历整个树
const findHelper = (node, list, depth) => {
  if (isLeaf(node)) {
    list.push({ depth, val: node.val });
    return;
  }
  if (node.left) {
    findHelper(node.left, list, depth + 1);
  }
  if (node.right) {
    findHelper(node.right, list, depth + 1);
  }
  list.push({ depth, val: node.val });
};

const findBottomLeftValue = (root) => {
  // 先 dfs，获得对应的深度信息
  const contentSet = [];
  findHelper(root, contentSet, 0);

  // 之后找出最大的深度
  const maxDepth = contentSet.reduce(
    (prevMax, { depth }) => (depth >= prevMax ? depth : prevMax),
    0,
  );

  // 过滤出所有的最深的叶子节点
  const deepestLeaves = contentSet.filter(item => item.depth === maxDepth);

  // 第一个，就是最底部最左边的节点
  return deepestLeaves[0].val;
};

// test case 1
// console.log(
//   findBottomLeftValue(
//     {
//       val: 1,
//       left: {
//         val: 2,
//         left: {
//           val: 4,
//           left: {
//             val: 8,
//             left: {
//               val: 11,
//               right: {
//                 val: 12,
//               }
//             },
//           },
//         },
//       },
//       right: {
//         val: 3,
//         left: {
//           val: 5,
//           left: {
//             val: 7,
//             right: {
//               val: 9,
//               left: {
//                 val: 10,
//               }
//             },
//           },
//         },
//         right: {
//           val: 6,
//         }
//       },
//     }
//   )
// );

// // test case 2
// console.log(
//   findBottomLeftValue(
//     {
//       val: 1,
//     }
//   )
// );

