//https://leetcode.com/problems/linked-list-cycle/

//Attempt#1
let hasCycle = function(head) {
    if(!head) {return false};
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) {return true};
    }
    
    return false;
}