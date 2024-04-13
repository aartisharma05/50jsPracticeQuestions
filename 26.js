// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0];
    let profit = 0;
    for(var i = 0;i<=prices.length-1;i++){
        if(prices[i]<min){
            min = prices[i];
        }
         profit = Math.max(profit, prices[i] - min);
    }

   

    return profit;
};
