// 민규의 악수
function solution(num) {
  let result = [];
  let count = 0;
  while (num > 0) {
    count++;
    num -= count;
  }
  result[0] = num + count;
  result[1] = count + 1;
  return result;
}
console.log(solution2(62));//[ 7, 12 ]
console.log(solution(59)); //[4, 12]
console.log(solution(48)); //[4, 12]
console.log(solution2(3)); //[ 0,4]

console.log("--------");

function solution2(n) {
  let 사람 = 0;
  let 총악수 = 0;
  let temp = 0;
  while (true) {
    총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);
    if (n < 총악수) {
      break;
    }
    temp = 총악수;
    사람 += 1;
  }
  return [parseInt(n - temp, 10), 사람];
}
console.log(solution2(62));//[ 7, 12 ]
console.log(solution2(59));//[4, 12]
console.log(solution2(48));//[ 3, 11 ]
console.log(solution2(3));//[ 0,4]
