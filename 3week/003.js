// K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  let arr = [];
  for (let i = 0; i < commands.length; i++) {
    arr = array.slice(commands[i][0] - 1, commands[i][1]);
    arr.sort((a, b) => a - b); //오름차순 정렬
    answer.push(arr[commands[i][2] - 1]);
  }

  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); //[5,6,3]

    // 내림차순 정렬 : arr.sort((a, b) => b - a);