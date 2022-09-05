//https://leetcode.com/problems/intersection-of-two-arrays-ii/

//Attempt#1
let intersect = function(nums1, nums2) {
    let res = [];
    
    for(let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];
        if(nums1.includes(cur)) {
            let temp = nums1.splice(nums1.indexOf(cur), 1);
            res.push(...temp);
        }
    }
    return res;
}

//Attempt#2
let intersect = function(nums1, nums2) {
    let map = {}, res = [];
    
    for(let x of nums1) {
        map[x] = map[x] + 1 || 1;
    }
    
    for(let x in nums2) {
        let cur = nums2[x];
        if(map[cur] > 0) {
            res.push(cur);
            map[cur]--;
        }
    }
    return res;
}