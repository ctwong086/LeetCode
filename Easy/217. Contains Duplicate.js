//https://leetcode.com/problems/contains-duplicate/

//Attempt#1
let containsDuplicate = function(nums) {
    let list = {};
    
    for(let i = 0; i < nums.length; i++) {
        list[nums[i]] = list[nums[i]] + 1 || 1;
    }
    for(let x in list) {
        if(list[x] > 1) {return true};
    }
    return false;
}

//Attempt#2
let containsDuplicate = function(nums) {
    let list = {};
    
    for(let i = 0; i < nums.length; i++) {
        list[nums[i]] = list[nums[i]] + 1 || 1;
        
        if(list[nums[i]] > 1) {return true};
    }
    return false;
}

//Attempt#3
let containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {return true};
    }
    return false;
}