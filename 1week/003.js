// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;

  //코드 구현
  var basket = [];
  for (var i = 0; i < moves.length; i++) {
    var move = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        basket.push(board[j][move]);
        board[j][move] = 0;
        break;
      }
    }
  }

  for (var i = 0; i < basket.length; i++) {
    if (basket[i] === basket[i + 1]) {
      basket.splice(i, 2);
      answer += 2;
      i = -1;
      /*
        i, i+1 을 제외하고 나면 그 다음 루프는 i+1, i+2가 되는데
        i 자리에 새로 들어온 원소를 건너뛰게 됩니다. 
        i = -1로 초기화해주어서 루프를 처음부터 돌게하면 해결!
      */
    }
  }
  // 코드 구현
  return answer;
}
const a = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));