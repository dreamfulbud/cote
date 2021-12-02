/*
  1)  10
  2)  12
  3)  14
  4)  16
*/
/*
정답 4 
  i += 2
  i : 1, 3 해당
  a = 10 + 1 +3 = 14
  a+b =14+2 = 16
*/
let a = 1;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b);