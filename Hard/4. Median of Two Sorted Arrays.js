//https://leetcode.com/problems/median-of-two-sorted-arrays/

//Attempt#1
let findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b);

    let len = Math.floor(arr.length / 2);
    let sum = 0;
    
    if(arr.length % 2 === 0) {
        sum += (arr[len] + arr[len - 1]) / 2;
    } else {
        sum += arr[len];
    }
    return sum.toFixed(5);
}

//Attempt#2
let findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let half = Math.floor(len / 2);
    let nums1Pos = 0;
    let nums2Pos = 0;
    let prev, cur;
    
    for(let i = 0; i <= half; i++) {
        prev = cur;
        if(nums2[nums2Pos] === undefined || (nums1[nums1Pos] <= nums2[nums2Pos] && nums1[nums1Pos] !== undefined)) {
            cur = nums1[nums1Pos];
            nums1Pos++;
        } else {
            cur = nums2[nums2Pos];
            nums2Pos++;
        }
    }
    return len % 2 === 0 ? (prev + cur) / 2 : cur;
}