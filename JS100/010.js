const input = 5;
let star = '';

for (let i = 1; i <= input; i++) {
  let line = '';
  for (let j = input - 1; j >= i; j--) {
    line += "-";
  }
  for (let k = 1; k <= 2 * i - 1; k++) { //이부분... 공부
    line += "*";
  }
  star += line + `\n`; //이부분 체크
}
console.log(star);