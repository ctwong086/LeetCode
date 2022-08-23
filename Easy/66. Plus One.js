//https://leetcode.com/problems/plus-one/submissions/

//Attempt#1
let plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    let carry = false;
    
    for(let i = digits.length - 1; i >= 0; i--) {
        if(carry) {
            digits[i] += 1;
            carry = false;
        }
        
        if(digits[i] > 9) {
            digits[i] = 0;
            carry = true;
        }
    }
    if(carry) {digits.unshift(1)};
    
    return digits;
}

//Attempt#2
let plusOne = function(digits) {
    let carry = 0;
    digits[digits.length - 1] += 1;
    
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        
        if(digits[i] === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0;
        }
    }
    
    if(carry) {digits.unshift(1)};

    return digits;
}