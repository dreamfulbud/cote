// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  var answer = 123456789;

  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      sum += absolutes[i];
    } else {
      sum += -absolutes[i];
    }
  }
  answer = sum;

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0