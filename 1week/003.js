// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, movess) {
  var answer = 0;

  //코드 구현
  let basket = [];
  for (let i = 0; i < movess.length; i++) {
    let move = movess[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        basket.push(board[j][move]);
        board[j][move] = 0;
        break;
      }
    }
  }

  for (let i = 0; i < basket.length; i++) {
    if (basket[i] === basket[i + 1]) {
      basket.splice(i, 2);
      answer += 2;
    }
  }


  // 코드 구현
  return answer;
}
const a = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));