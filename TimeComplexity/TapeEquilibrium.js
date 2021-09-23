function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // [3,1,2,4,3]
    // 1 -> 3 - 10 -> 7
    // 2 -> 4 - 9 -> 5
    // 4 -> 6 - 7 -> 1//
    // 3 -> 10 - 3 > 7
    let  p = 1;
    let sumOfLeft = A[0]
    let sumOfRight = 0;
    let min = Infinity;

    for(let i=1; i< A.length; i++) {
      sumOfRight += A[i];
    }

    for(let i=1; i< A.length; i++) {
      const diff = Math.abs(sumOfRight - sumOfLeft);
      if(diff < min) {
         min = diff;
      }
       sumOfLeft += A[i];
       sumOfRight -= A[i]
    }

    return min;
}