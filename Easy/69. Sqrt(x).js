//https://leetcode.com/problems/sqrtx/

//Attempt#1
let mySqrt = function(x) {
    if(x === 0) {return 0};
    
    for(let i = 1; i <= x / i; i++) {
        if(i <= x / i && (i + 1) > x / (i + 1)) {return i};
    }
}