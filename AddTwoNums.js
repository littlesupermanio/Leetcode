/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    l1 = [...l1]
    l2 = [...l2]
    let ret1 = l1.reverse().join("")
    let ret2 = l2.reverse().join("")
    let sum = parseInt(ret1)+parseInt(ret2)
    sum = sum + ""
    sum = [...sum]
    sum = sum.map((value)=>{
        return parseInt(value)
    })
    sum = sum.reverse()
    return sum
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))