//https://leetcode.com/problems/isomorphic-strings/

//Attempt#1
let isIsomorphic = function(s, t) {
    let list1 = {}, list2 = {};
    
    for(let i = 0; i < s.length; i++) {
        let one = s[i], two = t[i];
        
        if(!list1[one]) {list1[one] = two};
        if(!list2[two]) {list2[two] = one};
        
        if(list1[one] !== two || list2[two] !== one) {return false};
    }
    return true;
}