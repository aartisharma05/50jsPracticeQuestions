//https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = [];
    for(var i=0;i<arr.length;i++){
        returnedArray[i] = fn(arr[i], i);

    }
    return returnedArray;
};
