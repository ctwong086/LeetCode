//https://leetcode.com/problems/add-digits/

//Attempt#1
let addDigits = function(num) {
    while(num > 9) {
        num = Math.floor(num / 10) + (num % 10);
    }
    
    return num;
}