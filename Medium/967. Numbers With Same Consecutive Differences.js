//https://leetcode.com/problems/numbers-with-same-consecutive-differences/

//Attempt#1 Time Limit Exceeded
let numsSameConsecDiff = function(n, k) {
    function checkNum(num) {
        let str = String(num).split('').map(e => Number(e));
        for(let i = 0; i < str.length; i++) {
            let cur = str[i];
            
            if(i % 2 !== 0) {
                if(i + 1 < str.length) {
                    if(Math.abs(str[i - 1] - cur) !== k || Math.abs(str[i + 1] - cur) !== k) {
                        return false;
                    }
                } else {
                    if(Math.abs(str[i - 1] - cur) !== k) {
                        return false;
                    }
                }  
            } 
        }
        return true;
    }
    
    let res = [];

    for(let i = 10 ** (n - 1); i < 10 ** n; i++) {
        if(checkNum(i)) {res.push(i)};
    }
    return res;
}

//Attempt#2
let numsSameConsecDiff = function(n, k) {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    while(--n > 0) {
        let temp = [];
        
        for(let x of list) {
            let digit = x % 10;
            
            if(digit + k < 10) {temp.push(x * 10 + digit + k)};
            if(k !== 0 && digit - k >= 0) {temp.push(x * 10 + digit - k)};
        }
        list = temp;
    }
    return list;
}