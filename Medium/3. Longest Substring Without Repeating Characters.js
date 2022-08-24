//https://leetcode.com/problems/longest-substring-without-repeating-characters/

//Attempt#1
let lengthOfLongestSubstring = function(s) {
    let max = Number.MIN_VALUE;
    
    for(let i = 0; i < s.length; i++) {
        let temp = '';
        for(let j = i; j < s.length; j++) {
            if(temp.includes(s[j])) {break};
            temp += s[j];
            max = Math.max(temp.length, max);
        }
    }
    return max;
}

//Attempt#2
let lengthOfLongestSubstring = function(s) {
    let temp = [];
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        let prev = temp.indexOf(s[i]);
        if(prev !== -1) {
            temp.splice(0, prev + 1);
        }
        temp.push(s[i]);
        max = Math.max(temp.length, max);
    }
    return max;
}