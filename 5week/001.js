// 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
  var answer = 0;

  answer = n - lost.length;
  let lostLen = lost.length;
  let reserveLen = reserve.length;
  for (let i = 0; i < lostLen; i++) {
    for (let j = 0; j < reserveLen; j++) {
      if (lost[i] - 1 === reserve[j]) {
        reserve.splice(j, 1);
        lost.splice(i, 1);
        answer++;
      }
      if (lost[i] + 1 === reserve[j]) {
        reserve.splice(j, 1);
        lost.splice(i, 1);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
