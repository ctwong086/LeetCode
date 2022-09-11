//https://leetcode.com/problems/missing-number/

//Attempt#1
let missingNumber = function(nums) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    for(let i = 0; i < nums.length + 1; i++) {
        if(!map.has(i)) {
            return i;
        }
    }
}

//Attempt#2
let missingNumber = function(nums) {
    let sum = nums.length;
    
    for(let i = 0; i < nums.length; i++) {
        sum += i - nums[i];
    }
    
    return sum;
}