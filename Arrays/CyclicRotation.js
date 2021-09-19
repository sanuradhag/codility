function solution(A, K) {
    for (let i = 0; i < K; i++) {
        A = rotate(A);
    }
    return A
}

function rotate(A) {
    let i = 0;
    let temp = null;
    while (i < A.length) {
        temp = A[i]
        A[i] = A[A.length - 1];
        A[A.length - 1] = temp;
        i++;
    }
    return A;
}

function rotatePro(A) {
    A.unshift(A.pop())
    return A;
}
