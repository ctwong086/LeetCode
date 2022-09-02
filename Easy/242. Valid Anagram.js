//https://leetcode.com/problems/valid-anagram/

//Attempt#1
let isAnagram = function(s, t) {
    if(s.length !== t.length) {return false};
    s = s.split('').sort();
    t = t.split('').sort();
    
    for(let i = 0; i < t.length; i++) {
        if(s[i] !== t[i]) {return false};
    }
    return true;
}

//Attempt#2
let isAnagram = function(s, t) {
    if(s.length !== t.length) {return false};
    
    let sWord = {};
    let tWord = {};
    
    for(let i = 0; i < s.length; i++) {
        sWord[s[i]] = sWord[s[i]] + 1 || 1;
        tWord[t[i]] = tWord[t[i]] + 1 || 1;        
    }
    
    for(let x in sWord) {
        if(sWord[x] !== tWord[x]) {return false};
    }
    return true;
}

//Attempt#3
let isAnagram = function(s, t) {
    if(s.length !== t.length) {return false};
    let map = new Map();
    
    for(let x of s) {
        map.set(x, (map.get(x) || 0) + 1);
    }
    
    for(let x of t) {
        let cur = map.get(x);
        if(!cur) {return false};
        map.set(x, cur - 1);
    }
    return true;
}