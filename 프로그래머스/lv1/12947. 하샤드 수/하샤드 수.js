function solution(x) {
    let sum = x.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
    
    return x % sum === 0;
}