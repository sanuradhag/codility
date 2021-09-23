function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const set = new Set(A); // removes duplicates
    let i = 1; // smallest positive integer

    while(set.has(i)) { // if the set has i then increase i
       i++;
    }

    return i;
}