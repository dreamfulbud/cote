// 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {

  let count = 0;
  s = s.toUpperCase();
  for (let x of s) {
    if (x === 'P') {
      count++;
    } else if (x === 'Y') {
      count--;
    }
  }
  if (count === 0) return true;
  else return false;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // flase