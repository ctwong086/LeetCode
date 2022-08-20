//https://leetcode.com/problems/remove-element/

//Attempt#1
let removeElement = function(nums, val) {
    for(let i = 0; i < nums.length;) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
}

//Attempt#2
let removeElement = function(nums, val) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}