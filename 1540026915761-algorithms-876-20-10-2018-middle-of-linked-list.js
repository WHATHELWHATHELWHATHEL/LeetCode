/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// first version
const middleNode = (head) => { // eslint-disable-line
  let pointer = head;
  if (!pointer.next) {
    return pointer;
  }
  let lengthCounter = 0;
  const recordArray = [];
  while (pointer) {
    recordArray[lengthCounter] = pointer;
    lengthCounter += 1;
    pointer = pointer.next;
  }
  return recordArray[Math.floor(lengthCounter / 2)];
};
