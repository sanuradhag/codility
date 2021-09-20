function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const set = new Set();

    for(let i=0; i< A.length; i++) {
       if(set.has(A[i])) {
           set.delete(A[i])
       }else {
           set.add(A[i])
       }
    }

    return set.values().next().value;
}