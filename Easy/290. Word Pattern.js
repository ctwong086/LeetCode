//https://leetcode.com/problems/word-pattern/submissions/

//Attempt#1
let wordPattern = function(pattern, s) {
    function hasValue(m, target) {
        for(let [a, b] of m) {
            if(b === target) {return true};
        }
        return false;
    }
    
    let map = new Map();
    s = s.split(' ');
    if(s.length !== pattern.length) {return false};
    
    for(let i = 0; i < pattern.length; i++) {
        let cur = s[i];
        if(hasValue(map, cur) && !map.has(pattern[i])) {return false};
        
        if(map.has(pattern[i])) {
            let temp = map.get(pattern[i]);
            if(temp !== cur) {return false};
        } else {map.set(pattern[i], cur)};
    }
    return true;
}

//Attempt#2
let wordPattern = function(pattern, s) {
    let map = new Map();
    s = s.split(' ');
    
    if(s.length !== pattern.length) {return false};
    if(new Set(s).size !== new Set(pattern).size) {return false};
    
    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && map.get(pattern[i]) !== s[i]) {return false}
        else {map.set(pattern[i], s[i])};
    }
    return true;
}