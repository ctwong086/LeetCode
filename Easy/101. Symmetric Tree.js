//https://leetcode.com/problems/symmetric-tree/

//Attempt#1 Preorder DFS Recursive
let isSymmetric = function(root) {
    function check(left, right) {
        if(!left && !right) {return true};
        if(!left || !right || left.val !== right.val) {return false};
        
        return check(left.left, right.right) && check(left.right, right.left);
    }
    
    return check(root.left, root.right);
}

//Attempt#2 Preorder DFS Iterative
let isSymmetric = function(root) {
    function check(left, right) {
        let leftStack = [left], rightStack = [right];
        
        while(leftStack.length > 0 || rightStack.length > 0) {
            let l = leftStack.pop(), r = rightStack.pop();
            
            if(!l && !r) {continue};
            if(!l || !r || l.val !== r.val) {return false};
            
            leftStack.push(l.left);  rightStack.push(r.right);
            leftStack.push(l.right);  rightStack.push(r.left);
        }
        return true;
    }
    
    return check(root.left, root.right);
}

//Attempt#2 Preorder BFS Iterative
let isSymmetric = function(root) {
    function check(left, right) {
        let leftStack = [left], rightStack = [right];
        
        while(leftStack.length > 0 || rightStack.length > 0) {
            let l = leftStack.shift(), r = rightStack.shift();
            
            if(!l && !r) {continue};
            if(!l || !r || l.val !== r.val) {return false};
            
            leftStack.push(l.left);  rightStack.push(r.right);
            leftStack.push(l.right);  rightStack.push(r.left);
        }
        return true;
    }
    
    return check(root.left, root.right);
}