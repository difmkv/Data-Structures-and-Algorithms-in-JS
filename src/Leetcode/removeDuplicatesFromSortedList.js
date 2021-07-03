/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 export default function deleteDuplicates(head) {
  if(head === null) return null;  

  head.next = deleteDuplicates(head.next);

  if(head.val === head.next?.val) {
    head = head.next;
  }

  return head;
};
