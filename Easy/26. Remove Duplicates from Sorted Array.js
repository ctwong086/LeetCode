//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

//Attempt#1
let removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length - 1;) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
}