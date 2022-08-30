//https://leetcode.com/problems/excel-sheet-column-number/

//Attempt#1
let titleToNumber = function(title) {
    let res = 0;
    let times = 0;
    
    for(let i = title.length - 1; i >= 0; i--) {
        let d = (title[i].charCodeAt(0) - 64) * (26 ** times++);
        res += d;
    }
    return res;
}

//Attempt#2
let titleToNumber = function(title) {
    return title.split('').reverse().reduce((acc, cur, i) => {
       return acc + (cur.charCodeAt(0) - 64) * (26 ** i);
    }, 0);
}

//Attempt#3
let titleToNumber = function(title) {
    return title.split('').reduce((acc, cur, i) => {
       return acc * 26 + (cur.charCodeAt(0) - 64);
    }, 0);
}