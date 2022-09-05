//https://leetcode.com/problems/invert-binary-tree/

//Attempt#1
let invertTree = function(root) {
    if(!root) {return root};

    let lTemp = root.left;
    let rTemp = root.right;
    
    root.left = rTemp;
    root.right = lTemp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}

//Attempt#2 DFS
let invertTree = function(root) {
    let stack = [root];
    
    while(stack.length > 0) {
        let n = stack.pop();
        
        if(n !== null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }
    return root;
}

//Attempt#3 BFS
let invertTree = function(root) {
    let stack = [root];
    
    while(stack.length > 0) {
        let n = stack.shift();
        
        if(n !== null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }
    return root;
}