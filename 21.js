// https://leetcode.com/problems/length-of-last-word/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    var count =0;
    for(var i = s.length-1;i>=0;i--){
      if(s[i]===' '){
        break;
      }
     else count++;
    }
    return count;
    
};
