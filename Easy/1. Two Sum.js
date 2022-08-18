//

//Attempt#1
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i === j) {continue};
            
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

//Attempt#2
let twoSum = function(nums, target) {
    let list = {};
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let diff = target - cur;
        
        if(list[diff] > -1) {
            return [list[diff], i];
        } else {
            list[cur] = i;
        }
    }
};