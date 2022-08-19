//https://leetcode.com/problems/longest-common-prefix/

//Attempt#1
let longestCommonPrefix = function(arr) {
    if(!arr.length) {return ''};
    let pivot = arr[0];
    for(let i = 1; i < arr.length; i++) {
        while(arr[i].indexOf(pivot) !== 0) {
            pivot = pivot.slice(0, pivot.length - 1);
            if(pivot === '') {return ''};
        }
    }
    return pivot;
}

//Attempt#2
let longestCommonPrefix = function(arr) {
    if(!arr.length) {return ''};
    
    for(let i = 0; i < arr[0].length; i++) {
        let cur = arr[0][i];
        
        for(let j = 1; j < arr.length; j++) {
            if(i === arr[j].length || arr[j][i] !== cur) {
                return arr[0].slice(0, i);
            }
        }
    }
    return arr[0];
}

//Attempt#3
let longestCommonPrefix = function(arr) {
    if(!arr.length) {return ''};
    
    for(let i = 0; i < arr[0].length; i++) {
        if(!arr.every(e => arr[0][i] === e[i])) {
            return arr[0].slice(0, i);
        }
    }
    return arr[0];
}