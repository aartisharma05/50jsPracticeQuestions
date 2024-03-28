//https://leetcode.com/problems/counter/description/




/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
   var count = n;
   return function(){
    return count++;
   }
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
