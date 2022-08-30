//https://leetcode.com/problems/excel-sheet-column-title/

//Attempt#1
let convertToTitle = function(n) {
    let res = '';
    
    while(n > 0) {
        let r = n % 26;
        let d = Math.floor(n / 26);
        
        if(r === 0) {
            r = 26;
            d = d - 1;
        }
 
        res = String.fromCharCode(r + 64) + res;
        n = d;
    }
    
    return res;
}