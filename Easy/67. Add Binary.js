//https://leetcode.com/problems/add-binary/

//Attempt#1
let addBinary = function(a, b) {
    let aLen = a.length - 1;
    let bLen = b.length - 1;
    let res = [];
    let carry = 0;
    
    while(aLen >= 0 || bLen >= 0) {
        let sum = carry;
        if(aLen >= 0) {sum += Number(a[aLen--])};
        if(bLen >= 0) {sum += Number(b[bLen--])};
        
        carry = sum > 1 ? 1 : 0;
        res.push(sum % 2);
    }
    if(carry === 1) {res.push(carry)};
    
    return res.reverse().join('');
}