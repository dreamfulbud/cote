// 최소직사각형
// https://programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
  let answer = 0;
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }
  let width = [];
  let height = [];
  for (let i = 0; i < sizes.length; i++) {
    width.push(sizes[i][0]);
    height.push(sizes[i][1]);
  }
  answer = Math.max(...width) * Math.max(...height);
  return answer;
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); // 133
