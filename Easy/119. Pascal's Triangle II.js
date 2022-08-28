//https://leetcode.com/problems/pascals-triangle-ii/

//Attempt#1
let getRow = function(rowIndex) {
    let res = [[1]];
    
    for(let i = 1; i < rowIndex + 1; i++) {
        res[i] = res[i] || [];
        
        res[i].push(1);
        for(let j = 1; j < i; j++) {
            let sum = res[i - 1][j - 1] + res[i - 1][j];
            res[i][j] = sum;
        }
        res[i].push(1);
    }
    return res.pop();
}