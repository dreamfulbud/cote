let arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);

// 출력 [200, 100, 10000, 300]

/*
  splice(시작인덱스, 제거할 요소 수, 추가할 아이템1, 아이템2 ...)
  배열에 영향을 미침
*/