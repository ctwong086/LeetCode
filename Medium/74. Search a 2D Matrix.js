//https://leetcode.com/problems/search-a-2d-matrix/

//Attempt#1
let searchMatrix = function(matrix, target) {
    let index = 0;
    for(let i = 1; i < matrix.length; i++) {
        if(target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
            index = i;
        }
    }
    for(let i = 0; i < matrix[index].length; i++) {
        if(matrix[index][i] === target) {
            return true;
        }
    }
    return false;
}

//Attempt#2
let searchMatrix = function(matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] === target) {return true}
        else if(matrix[row][col] > target) {col--}
        else {row++};
    }
    return false;
}