//https://leetcode.com/problems/summary-ranges/

//Attempt#1
let summaryRanges = function(nums) {
    let res = [];
    
    for(let i = 0; i < nums.length; i++) {
        let start = nums[i];
        
        if(nums[i + 1] - nums[i] !== 1) {
            res.push(`${start}`);
        } else {
            while(nums[i + 1] - nums[i] === 1) {
                i++;
            }
            let end = nums[i];
            res.push(`${start}->${end}`);
        }
    }
    return res;
}