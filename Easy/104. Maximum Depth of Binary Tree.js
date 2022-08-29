//https://leetcode.com/problems/maximum-depth-of-binary-tree/

//Attempt#1 DFS
let maxDepth = function(root) {
    if(root === null) {return 0};
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

//Attempt#2 BFS
let maxDepth = function(root) {
    if(!root) {return 0};
    let levels = 0, stack = [root];
    
    while(stack.length > 0) {
        let count = stack.length;
        
        for(let i = 0; i < count; i++) {
            let node = stack.shift();
            if(node.left) {stack.push(node.left)};
            if(node.right) {stack.push(node.right)};
        }
        levels++;
    }
    return levels;
}