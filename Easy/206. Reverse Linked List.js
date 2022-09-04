//https://leetcode.com/problems/reverse-linked-list/

//Attempt#1
let reverseList = function(head) {
    let prev = null;
    
    while(head) {
        //save head.next
        let next = head.next;
        //replace next with prev element
        head.next = prev;
        //reset pointer
        prev = head;
        //load saved element
        head = next;
    }
    
    return prev;
}