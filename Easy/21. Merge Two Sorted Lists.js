//https://leetcode.com/problems/merge-two-sorted-lists/

//Attempt#1
let mergeTwoLists = function(list1, list2) {
    //create new node list and pointer
    let res = new ListNode(0);
    let cur = res;

    //while list1, list2 !== null
    while(list1 !== null && list2 !== null) {
        //add val to mergedList
        if(list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }
    if(list1 !== null) {cur.next = list1};
    if(list2 !== null) {cur.next = list2};
    
    return res.next;
}