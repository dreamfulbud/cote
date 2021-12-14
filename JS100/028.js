function solution(str) {
  let strArr = str.split('');
  let result = '';
  for (let i = 0; i < str.length - 1; i++) {
    result += `${strArr[i]} ${strArr[i + 1]} \n`;
  }
  return result;
}
console.log(solution("Javascript"));


