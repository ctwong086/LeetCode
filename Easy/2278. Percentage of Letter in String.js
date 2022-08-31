//https://leetcode.com/problems/percentage-of-letter-in-string/

//Attempt#1
let percentageLetter = function(s, letter) {
    let len = s.split('').filter(e => e === letter);
    
    return Math.floor(len.length / s.length * 100);
}

//Attempt#2
let percentageLetter = function(s, letter) {
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === letter) {count++};
    }
    
    return Math.floor(count / s.length * 100);
}