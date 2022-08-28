//https://leetcode.com/problems/maximum-depth-of-binary-tree/

//Attempt#1
let maxDepth = function(root) {
    if(root === null) {return 0};
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}