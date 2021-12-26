// 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //4