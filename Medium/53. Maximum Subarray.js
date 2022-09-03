//https://leetcode.com/problems/maximum-subarray/

//Attempt#1
let maxSubArray = function(nums) {
    let prev = 0;
    let max = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        prev = Math.max(nums[i], prev + nums[i]);
        max = Math.max(max, prev);
    }
    
    return max;
}