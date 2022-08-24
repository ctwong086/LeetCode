//https://leetcode.com/problems/merge-sorted-array/

//Attempt#1
let merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < nums1.length;) {
        let cur = nums1[i];
        
        if(cur > nums2[0]) {
            nums1.splice(i, 0, nums2.splice(0, 1));
            nums1.pop();
        } else {
            i++;
        }
    }

    if(nums2.length) {
        let len = nums1.length - nums2.length;
        for(let i = len; i < nums1.length; i++) {
            nums1[i] = nums2[0];
            nums2.splice(0, 1);
        }
    }
}

//Attempt#2
let merge = function(nums1, m, nums2, n) {
    let insertPos = m + n - 1;
    m--, n--;
    
    while(n >= 0) {
        if(nums1[m] > nums2[n]) {
            nums1[insertPos] = nums1[m];
            m--;
        } else {
            nums1[insertPos] = nums2[n];
            n--;
        }
        insertPos--;
    }
}