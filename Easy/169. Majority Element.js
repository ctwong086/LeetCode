//https://leetcode.com/problems/majority-element/

//Attempt#1 Hashmap
let majorityElement = function(nums) {
    let len = Math.floor(nums.length / 2);
    let times = {};
    
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        times[cur] = times[cur] + 1 || 1;
    }
    for(let x in times) {
        if(times[x] > len) {
            return x;
        }
    }
}

//Attempt#2 Sorting
let majorityElement = function(nums) {
    let len = Math.floor(nums.length / 2);
    nums = nums.sort((a, b) => a - b);
    
    return nums[len];
}