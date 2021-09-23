function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // find the consecutive steps until x
    // x -> 5 , 1,2,3,4,5

    const steps = new Set();

    for(let i=0; i< A.length; i++){
        steps.add(A[i]);
        if (steps.size === X) {
            return i;
        }
    };

    return -1;
}