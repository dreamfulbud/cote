function solution(str) {
  let arr = str.split(' ');
  let sortArr = arr.slice().sort((a, b) => a - b);

  if (arr.join() === sortArr.join()) return "YES";
  else return "NO";
}
console.log(solution("176 156 155 165 166 169"));
console.log(solution("155 156 165 166 169 176"));

