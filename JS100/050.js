//버블 정렬
function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

// const items = prompt('입력해주세요.').split(' ').map((n) => {
//   return parseInt(n, 10);
// });

console.log(bubble([16, 2, 11, 1, 3])); // 1,2,3,11,16
