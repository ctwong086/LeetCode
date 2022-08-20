//https://leetcode.com/problems/implement-strstr/

//Attempt#1
let strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

//Attempt#2
let strStr = function(haystack, needle) {
    if(needle === '' || haystack === needle) {return 0};
    if(haystack.length < needle.length) {return -1};
    
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            for(let j = 0; j < needle.length; j++) {
                if(needle[j] !== haystack[i + j]) {
                    break;
                } 
                if(j === needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
}