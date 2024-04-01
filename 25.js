// https://leetcode.com/problems/valid-palindrome/



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
    s = s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
   

    var revStr = null;
    revStr = s.split("").reverse().join("");
    return revStr===s;
};
