//https://leetcode.com/problems/single-number/

//Attempt#1
let singleNumber = function(nums) {
    return nums.find(e => nums.indexOf(e) === nums.lastIndexOf(e));
}

//Attempt#2
let singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^ cur);
}