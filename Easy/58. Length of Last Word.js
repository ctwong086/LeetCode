//https://leetcode.com/problems/length-of-last-word/

//Attempt#1
let lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
}