// 변형된 리스트
function solution(a, b) {
  let result = [];

  for (let i in a) {
    if (i % 2 === 0) {
      result.push([a[i], b[i]]);
    } else {
      result.push([b[i], a[i]]);
    }

  }
  return result;
}

console.log(solution([1, 2, 3, 4], ['a', 'b', 'c', 'd'])); //[ [ 1, 'a' ], [ 'b', 2 ], [ 3, 'c' ], [ 'd', 4 ] ]