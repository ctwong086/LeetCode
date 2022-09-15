//https://leetcode.com/problems/reverse-vowels-of-a-string/

//Attempt#1
let reverseVowels = function(s) {
    let vowel = 'aeiouAEIOU';
    let str = '', index = 0;
    let res = '';
    
    for(let i = s.length - 1; i >= 0; i--) {
        if(vowel.includes(s[i])) {str += s[i]};
    }
    
    for(let i = 0; i < s.length; i++) {
        if(vowel.includes(s[i])) {
            res += str[index];
            index++;
        } else {
            res += s[i];
        }
    }
    return res;
}