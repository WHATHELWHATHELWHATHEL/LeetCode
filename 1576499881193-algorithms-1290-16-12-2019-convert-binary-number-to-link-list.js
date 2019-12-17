/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

const getValueHelper = ({ node, prev }) => {
  if (!node.next) {
    // last one in the link list
    return 2 * prev + node.val;
  }
  return getValueHelper({
    node: node.next,
    prev: 2 * prev + node.val,
  });
};

const getDecimalValue = (head) => {
  return getValueHelper({ node: head, prev: 0 });
};

// test cases
// const case1 = {
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 1,
//     },
//   }
// };
// getDecimalValue(case1);

// const case2 = {
//   val: 0,
//   next: {
//     val: 0,
//     next: {
//       val: 1,
//       next: {
//         val: 0,
//         next: {
//           val: 1,
//           next: {
//             val: 0
//           }
//         },
//       }
//     },
//   },
// };
// getDecimalValue(case2);
