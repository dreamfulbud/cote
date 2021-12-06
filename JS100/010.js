const input = 5;

//삼각형
let star = '';
for (let i = 0; i < input; i++) {
  let line = '';
  for (let j = input - i - 1; j > 0; j--) {
    line += " ";
  }
  line += "*".repeat(2 * i + 1);
  star += line + `\n`;
}
console.log(star);

//역삼각형
let star2 = '';
for (let i = 0; i < input; i++) {
  let line = '';
  line += " ".repeat(i);
  for (let j = 2 * (input - i) - 1; j > 0; j--) {
    line += "*";
  }

  star2 += line + `\n`; //이부분 체크
}
console.log(star2);


//별 하나씩 증감
let star3 = '';
for (let i = 0; i < input; i++) {
  let line = '';
  line += "*".repeat(i + 1);
  star3 += line + `\n`;
}
console.log(star3);

//별 하나씩 빼기
let star4 = '';
for (let i = 0; i < input; i++) {
  let line = '';
  line += "*".repeat(input - i);
  star4 += line + `\n`;
}
console.log(star4);