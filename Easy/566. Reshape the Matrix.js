//https://leetcode.com/problems/reshape-the-matrix/

//Attempt#1
let matrixReshape = function(mat, r, c) {
    let list = mat.flat(), index = 0;
    if(list.length !== r * c) {return mat};
    let res = [];
    
    for(let i = 0; i < r; i++) {
        res[i] = res[i] || [];
        
        for(let j = 0; j < c; j++) {
            res[i].push(list[index]);
            index++;                
        }
    }
    
    return res;
}

//Attempt#2
let matrixReshape = function(mat, r, c) {
    let list = mat.flat();
    if(list.length !== r * c) {return mat};
    let res = [];
    
    while(r--) {res.push(list.slice(res.length * c, res.length * c + c))};
    
    return res;
}