//https://leetcode.com/problems/binary-tree-inorder-traversal/

//Attempt#1 Iterative Approach
let inorderTraversal = function(root) { 
    let stack = [], res = [];
    
    while(root || stack.length) {
        if(root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    
    return res;
}

//Attempt#2 Recursive Approach
let inorderTraversal = function(root) { 
    function traverse(node) {
        if(!node) {return};
        
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
    
    let res = [];
    traverse(root);
    
    return res;
}