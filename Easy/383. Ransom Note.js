//https://leetcode.com/problems/ransom-note/

//Attempt#1
let canConstruct = function(a, b) {
    b = b.split('');
    for(let i = 0; i < a.length; i++) {
        let cur = a[i];
        if(b.indexOf(cur) >= 0) {
            b.splice(b.indexOf(cur), 1);
        } else {
            return false;
        }
    }
    return true;
}