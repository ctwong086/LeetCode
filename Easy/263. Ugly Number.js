//https://leetcode.com/problems/ugly-number/

//Attempt#1
let isUgly = function(n) {
    if(n === 1) {return true};
    if(n < 1) {return false};

    while(n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
        if(n % 2 === 0) {n /= 2};
        if(n % 3 === 0) {n /= 3};
        if(n % 5 === 0) {n /= 5};
    }
    return n === 1;
}

//Attempt#2
let isUgly = function(n) {
    if(n < 1) {return false};
    let list = [2, 3, 5];
    for(let x of list) {
        while(n % x === 0) {n /= x};
    }
    return n === 1;
}