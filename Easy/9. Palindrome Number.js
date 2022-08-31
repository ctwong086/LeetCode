//https://leetcode.com/problems/palindrome-number/

//Attempt#1
let isPalindrome = function(x) {
    let reverse = Number(String(x).split('').reverse().join(''));
    return x === reverse;
}