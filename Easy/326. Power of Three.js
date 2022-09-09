//https://leetcode.com/problems/power-of-three/

//Attempt#1
let isPowerOfThree = function(n) {
    if(n < 1) {return false};
        
    for(let i = 0; i <= Math.sqrt(n); i++) {
        if(3 ** i > n) {return false};
        if(3 ** i === n) {return true};
    }
}