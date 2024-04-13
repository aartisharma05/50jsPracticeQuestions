//  https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var anagrams = new Map();
    for(let word of strs){
        let sortedWord = [...word].sort().join('');
        if(!anagrams.has(sortedWord)){
            anagrams.set(sortedWord,[]);
        }
        anagrams.get(sortedWord).push(word)
    }

    return Array.from(anagrams.values());
};
