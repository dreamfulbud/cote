// 다트게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let answer = 0;
  let arr = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] == "S") {
      arr.push(temp);
    } else if (dartResult[i] == "D") {
      arr.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      arr.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      arr[arr.length - 1] *= -1;
    }
  }
  for (let i of arr) {
    answer += i;
  }
  return answer;
}
console.log(solution("10S2D*3T"));
console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log(solution("1D2S0T")); //3