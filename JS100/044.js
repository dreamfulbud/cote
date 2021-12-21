
function solution(n) {
  let arr = n.toString().split('');
  let sum = 0;
  arr.forEach(i => { sum += parseInt(i, 10) });
  return sum;
}

console.log(solution(18234)); //18
console.log(solution(3849)); //24


console.log("---------------");
//답안 풀이
function solution2(n) {
  let sum = 0;
  while (n !== 0) {
    sum += (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(solution2(18234)); //18
console.log(solution2(3849)); //24






