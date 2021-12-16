function solution(n) {
  let result = '';
  for (let i = 1; i < 10; i++) {
    result += `${n * i} `;
  }
  return result;

}
console.log(solution(2));
console.log(solution(9));

