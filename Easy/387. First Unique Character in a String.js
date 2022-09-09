//https://leetcode.com/problems/first-unique-character-in-a-string/

//Attempt#1
let firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}

//Attempt#2
let firstUniqChar = function(s) {
    let map = new Map();
    
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}