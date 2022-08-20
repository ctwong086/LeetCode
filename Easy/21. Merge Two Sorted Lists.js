//https://leetcode.com/problems/merge-two-sorted-lists/

//Attempt#1
let mergeTwoLists = function(list1, list2) {
    //create new node list and pointer
    let mergedList = new ListNode(0);
    let pointer = mergedList;
    
    //while list1, list2 !== null
    while(list1 !== null && list2 !== null) {
        //add val to mergedList
        if(list1.val > list2.val) {
            pointer.next = list2;
            list2 = list2.next;
        } else {
            pointer.next = list1;
            list1 = list1.next;            
        }
        pointer = pointer.next;
    }
    if(list1 !== null) {pointer.next = list1};
    if(list2 !== null) {pointer.next = list2};
    
    return mergedList.next;
}