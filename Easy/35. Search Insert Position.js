//https://leetcode.com/problems/search-insert-position/

//Attempt#1
let searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length;) {
        if(target <= nums[i]) {
            return i;
        } else if(target > nums[i]) {
            i++;
        } 
    }
    return nums.length;
}

//Attempt#2
let searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length;
    
    while(min < max) {
        let mid = Math.floor((min + max) / 2);
        
        if(target === nums[mid]) {return mid};
        if(target > nums[mid]) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
}