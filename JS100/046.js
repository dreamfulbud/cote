/*
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

function solution(start, end) {
  let result = 0;
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr += i.toString().split(' ');
  }
  for (let i of arr) {
    result += parseInt(i);
  }
  return result;
}
console.log(solution(1, 20));
console.log(solution(10, 15)); //21
console.log(solution(1, 3)); //6