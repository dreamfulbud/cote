// 이상한 엘레베이터
function solution(num) {
  let result = 0;

  while (true) {
    if (num % 7 === 0) {
      result += parseInt(num / 7, 10);
      break;
    }
    num -= 3;
    result += 1;
    if (num < 0) {
      result = -1;
      break;
    }
  }
  return result;
}

console.log(solution(3));//1
console.log(solution(6));//2
console.log(solution(8));//-1
console.log(solution(24));//4