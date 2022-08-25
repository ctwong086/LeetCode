//https://leetcode.com/problems/longest-palindromic-substring/

//Attempt#1 Dynamic Programming Approach
let longestPalindrome = function(str) {
    if(str.length <= 1) {return str};
    
    //create 2D matrix
    let dp = [...new Array(str.length + 1)].map(e => new Array(str.length + 1).fill(0));
    let lps = '';
    
    //1 character case
    for(let i = 0; i < str.length; i++) {
        dp[i][i] = 1;
        lps = str[i];
    }
    
    //2 characters case
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]) {dp[i][i + 1] = 1};
        if(dp[i][i + 1]) {lps = str.slice(i, i + 2)};
    }
    
    //3 or more characters case
    for(let i = str.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < str.length; j++) {
            if(str[i] === str[j] && dp[i + 1][j - 1]) {dp[i][j] = 1};
            if(dp[i][j]) {
                lps = (j - i + 1) > lps.length ? str.slice(i, j + 1) : lps;
            } 
        }
    }
    return lps;
}