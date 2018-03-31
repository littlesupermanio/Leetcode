var addTwoNumbers = function(l1, l2) {
    if(l1==null) return l2;
    if(l2==null) return l1;
    var carry = 0;
    var dummy = new ListNode(0);
    var p = dummy;
    while(l1 !== null|| l2 !== null|| carry !==0)
    {
        if(l1 !== null) {
            carry += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null) {
            carry += l2.val;
            l2 = l2.next;
        }
        p.next = new ListNode(carry%10);
        carry /= 10;
        p = p.next;
    }
    return dummy.next;
}
