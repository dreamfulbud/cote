function solution(str) {
  let result = 1;

  let arr = str.split(' ');
  arr.sort((a, b) => b - a);

  let max = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (max === arr[i]) {
      result++;
    } else {
      max = arr[i];
      count++;
      result++;
    }
    if (count === 3) break;
  }

  return result;
}
console.log(solution("97 86 75 66 55 97 85 97 97 95")); //6
console.log(solution("10 9 8 7 6 5 4")); //6

