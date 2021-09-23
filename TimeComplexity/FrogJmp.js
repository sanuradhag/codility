function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    // x -> y && y >= x
    // y >= x + md
    // m = (y-x)/d

    return Math.ceil((Y-X)/D)
}