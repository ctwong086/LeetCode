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

//Attempt#2
let addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let cur = res;
    let carry = 0;
    
    while(l1 !== null || l2 !== null) {
        let sum = carry;
        
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        };
        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next;  
        };
        carry = sum > 9 ? 1 : 0;
        sum = sum % 10;
        cur.next = new ListNode(sum);
        cur = cur.next;
    }
    if(carry === 1) {cur.next = new ListNode(carry)};
    return res.next;
}