// K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  let i = 0;
  let j = 0;
  let k = 0;
  let arr = [];
  // i : start ,j : end, k번째 숫자?
  for (let x = 0; x < 3; x++) {
    i = commands[x][0] - 1;
    j = commands[x][1];
    k = commands[x][2] - 1;

    arr = array.slice(i, j);

    //오름차순 정렬
    arr.sort((a, b) => a - b);
    // 내림차순 정렬 : arr.sort((a, b) => b - a);
    answer.push(arr[k]);
  }

  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); //[5,6,3]