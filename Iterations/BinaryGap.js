function solution(N) {
    const binary =  N.toString(2);  // convert to binary
    const x = (binary.match(/(?!1)(0+)(?=1)/g) || []); // match zeros between ones
    if(!x.length) { // if x is empty no binary gaps
        return 0
    }
    const lenArr = x.map(s => s.length); // map zeros to zero length
    return Math.max(...lenArr) // returns the max len zeros
}