//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//Attempt#1
let maxProfit = function(prices) {
    let min = Number.MAX_VALUE, max = 0;
    
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
}