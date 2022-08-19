//https://leetcode.com/problems/roman-to-integer/

//Attempt#1
let romanToInt = function(s) {
    let res = 0;
    
    for(let i = 0; i < s.length;) {
        switch(s[i]) {
            case 'I':
                if(s[i + 1] === 'V') {
                    res += 4;
                    i += 2;
                } else if(s[i + 1] === 'X') {
                    res += 9;
                    i += 2;
                } else {
                    res += 1;
                    i++;
                }
                break;
            case 'V':
                res += 5;
                i++;
                break;
            case 'X':
                if(s[i + 1] === 'L') {
                    res += 40;
                    i += 2;
                } else if(s[i + 1] === 'C') {
                    res += 90;
                    i += 2;
                } else {
                    res += 10;
                    i++;
                }
                break;
            case 'L':
                res += 50;
                i++;
                break;
            case 'C':
                if(s[i + 1] === 'D') {
                    res += 400;
                    i += 2;
                } else if(s[i + 1] === 'M') {
                    res += 900;
                    i += 2;
                } else {
                    res += 100;
                    i++;
                }
                break;
            case 'D':
                res += 500;
                i++;
                break;                
            case 'M':
                res += 1000;
                i++;
                break;                
        }
    }
    
    return res;
};

//Attempt#2
let romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let res = s.split('').map((e, i, arr) => {
        switch(e) {
            case 'I':
                if(arr[i + 1] === 'V' || arr[i + 1] === 'X') {
                    return -1;
                }
                break;
            case 'X':
                if(arr[i + 1] === 'L' || arr[i + 1] === 'C') {
                    return -10;
                }
                break;
            case 'C':
                if(arr[i + 1] === 'D' || arr[i + 1] === 'M') {
                    return -100;
                }
                break;
        }
        return roman[e];
    });
    return res.reduce((acc, cur) => acc + cur, 0);
}