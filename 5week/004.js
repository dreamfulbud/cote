// 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

// answer = (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ');

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2).split('');
    arr2[i] = arr2[i].toString(2).split('');

    while (arr1[i].length < n) {
      arr1[i].unshift('0');
    }
    while (arr2[i].length < n) {
      arr2[i].unshift('0');
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] != arr2[i][j]) {
        arr1[i][j] = '#';
      } else if (arr1[i][j] === '1') {
        arr1[i][j] = '#';
      } else {
        arr1[i][j] = ' ';
      }
    }
    answer[i] = arr1[i].join('');
  }
  return answer;
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// ["######", "### #", "## ##", " #### ", " #####", "### # "]