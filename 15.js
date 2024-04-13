// https://leetcode.com/problems/generate-fibonacci-sequence/description/


/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {

    let i = 0;
    let j = 1;

    yield 0;
    yield 1;
    while(true){
        let k = i+j;
        yield k;
        i=j
        j=k

    }

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
