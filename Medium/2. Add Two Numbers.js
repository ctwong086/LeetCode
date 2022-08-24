//https://leetcode.com/problems/add-two-numbers/

//Attempt#1
let addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let cur = res;
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let sum = 0;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        sum += carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }
    return res.next;
}