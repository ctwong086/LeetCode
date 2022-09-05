//https://leetcode.com/problems/balanced-binary-tree/

//Attempt#1
let isBalanced = function(root) {
    function check(node) {
        if(!node) {return 0};
        
        let left = check(node.left);
        let right = check(node.right);
        
        if(left === -1 || right === -1) {return -1};
        if(Math.abs(left - right) > 1) {return -1};
        
        return Math.max(left, right) + 1;
    }
    
    if(!root) {return true};
    
    return check(root) === -1 ? false : true;
}