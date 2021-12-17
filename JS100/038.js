function solution(str) {
  str = str.split(' ');
  str.sort((a, b) => a - b);

  let result = 0;
  let arr = [];

  while (arr.length < 3) {
    let grade = str.pop();
    if (!arr.includes(grade)) {
      arr.push(grade);
    }
    result += 1;
  }
  return result;
}
console.log(solution("97 86 75 66 55 97 85 97 97 95")); //6


