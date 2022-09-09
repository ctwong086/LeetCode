//https://leetcode.com/problems/valid-sudoku/

//Attempt#1
let isValidSudoku = function(board) {
    function isValid(arr) {
        arr = arr.map(x => x.filter(e => e !== '.'));

        return arr.every(x => x.every(e => x.indexOf(e) === x.lastIndexOf(e)));
    }
    
    let col = [];
    for(let i = 0; i < board.length; i++) {
        col[i] = col[i] || [];
        for(let j = 0; j < board.length; j++) {
            col[i][j] = board[j][i]; 
        }
    }
    
    let square = [];
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            let pos = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            
            square[pos] = square[pos] || [];
            square[pos].push(board[i][j]);
        }
    }

    return isValid(board) && isValid(col) && isValid(square);
}