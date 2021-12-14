// 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
  var answer = 0;

  answer = n - lost.length;
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] - 1 === lost[j]) {
        answer++;
      } else if (reserve[i] + 1 === lost[j]) {
        answer++;
      }
      if (reserve[i] + 1 === lost[j] && reserve[i] + 1 === lost[j]) {
        answer--;
      }
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
