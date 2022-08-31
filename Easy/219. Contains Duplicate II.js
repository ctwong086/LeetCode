//https://leetcode.com/problems/contains-duplicate-ii/

//Attempt#1
let containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(i - map.get(nums[i]) <= k) {return true};
        
        map.set(nums[i], i);
    }
    return false;
}