//https://leetcode.com/problems/valid-palindrome/

//Attempt#1
let isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    return s === s.split('').reverse().join('');
}

//Attempt#2
let isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        if(s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}