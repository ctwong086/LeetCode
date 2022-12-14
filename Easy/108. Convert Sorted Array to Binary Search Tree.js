//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

//Attempt#1
let sortedArrayToBST = function(nums) {
    if(nums === null || !nums.length) {return null};
    
    let mid = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[mid]);
    
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));
    return node;
}