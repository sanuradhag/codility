function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // A = [2,3,1,5] -> 4 -> 11
    // total = n * (n+1) /2
    // 5 * 6 /2
    // 15
    // 15 - 11 = 4

    if (!A.length) {
        return 1;
    }

    const n = A.length + 1; // one elemenet is missing
    const actualTotal = A.reduce((a, b) => a + b);
    const expectedTotal = (n * (n + 1)) / 2;
    return expectedTotal - actualTotal;
}