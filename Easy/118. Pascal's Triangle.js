//https://leetcode.com/problems/pascals-triangle/

//Attempt#1
let generate = function(numRows) {
    let res = [[1]];
    
    for(let i = 1; i < numRows; i++) {
        res[i] = res[i] || [];
        
        res[i].push(1);
        for(let j = 1; j < i; j++) {
            let sum = res[i - 1][j - 1] + res[i - 1][j];
            res[i][j] = sum;
        }
        res[i].push(1);
    }

    return res;
}