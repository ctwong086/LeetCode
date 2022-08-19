//https://leetcode.com/problems/valid-parentheses/

//Attempt#1
let isValid = function(s) {
    let res = [];
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            res.push(s[i]);
        } else {
            if(res.pop() !== brackets[s[i]]) {
                return false;
            }
        }
    }
    return res.length === 0;
};