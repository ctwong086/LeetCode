//https://leetcode.com/problems/power-of-four/

//Attempt#1
let isPowerOfFour = function(n) {
    for(let i = 0; i <= Math.sqrt(n); i++) {
        if(n === 4 ** i) {
            return true;
        }
    }
    return false;
}

//Attempt#2
let isPowerOfFour = function(n) {
    return n > 0 && Math.log2(n) % 2 === 0;
}