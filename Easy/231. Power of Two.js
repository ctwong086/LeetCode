//https://leetcode.com/problems/power-of-two/

//Attempt#1
let isPowerOfTwo = function(n) {
    for(let i = 0; i <= Math.ceil(Math.sqrt(n)); i++) {
        if(Math.pow(2, i) === n) {return true};
    }
    return false;
}

//Attempt#2
let isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log2(n));
}