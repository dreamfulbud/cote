// 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  let count = 0;
  let arr = [];
  for (let i = left; i <= right; i++) {

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    arr.push([i, count]);
    count = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] % 2 === 0) {
      answer += arr[i][0];
    } else {
      answer -= arr[i][0];
    }
  }
  return answer;
}
console.log(solution(13, 17)); //43
console.log(solution(24, 27)); //52
