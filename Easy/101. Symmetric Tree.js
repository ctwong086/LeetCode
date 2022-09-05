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
        let lStack = [left], rStack = [right];
        
        while(lStack.length > 0 || rStack.length > 0) {
            let l = lStack.pop(), r = rStack.pop();
            
            if(!l && !r) {continue};
            if(!l || !r || l.val !== r.val) {return false};
            
            lStack.push(l.left);  rStack.push(r.right);
            lStack.push(l.right);  rStack.push(r.left);
        }
        return true;
    }
    
    return check(root.left, root.right);
}

//Attempt#2 Preorder BFS Iterative
let isSymmetric = function(root) {
    function check(left, right) {
        let lStack = [left], rStack = [right];
        
        while(lStack.length > 0 || rStack.length > 0) {
            let l = lStack.shift(), r = rStack.shift();
            
            if(!l && !r) {continue};
            if(!l || !r || l.val !== r.val) {return false};
            
            lStack.push(l.left);  rStack.push(r.right);
            lStack.push(l.right);  rStack.push(r.left);
        }
        return true;
    }
    
    return check(root.left, root.right);
}