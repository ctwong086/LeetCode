//https://leetcode.com/problems/string-to-integer-atoi/

//Attempt#1
let myAtoi = function(s) {
    let temp = '';
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            if(temp.length === 0) {continue}
            else {break};
        };
        if(s[i] === '+' || s[i] === '-') {
            if(temp.match(/[+-]/g)) {break}
            else {
                if(temp.length !== 0) {break} 
                else {
                    temp += s[i];
                    continue;
                }
            };
        };
        if(Number(s[i]) != s[i]) {break}
        else {temp += s[i]};
    }
    if(!temp.match(/[0-9]/g) || !Number(temp)) {return 0};
    
    return Number(temp) > 2 ** 31 - 1 ? 2 ** 31 - 1 : Number(temp) < -(2 ** 31) ? -(2 ** 31) : Number(temp);
}

//Attempt#2
/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = function(s) {
    let index = 0, res = 0, isNeg = false;
    
    //Step 1 Remove space
    while(s[index] === ' ') {index++};
    
    //Step 2 + / -
    if(s[index] === '-') {
        isNeg = true;
        index++;
    } else if(s[index] === '+') {index++};
    
    //Step 3 Process number
    for(index; index < s.length; index++) {
        let code = s.charCodeAt(index) - 48;
        if(code < 0 || code > 9) {break};
        
        res *= 10;
        res += code;
    }
    
    //Step 4 Change to Negative?
    if(isNeg) {res *= -1};
    
    //Step 5
    if(res > 2 ** 31 - 1) {return 2 ** 31 - 1}
    else if(res < -(2 ** 31)) {return -(2 ** 31)}
    else {return res};
}