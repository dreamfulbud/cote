// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let answer = '';
  let day = new Date(`2016-${a}-${b}`).getDay();

  switch (day) {
    case 0: answer = 'SUN'; break;
    case 1: answer = 'MON'; break;
    case 2: answer = 'TUE'; break;
    case 3: answer = 'WED'; break;
    case 4: answer = 'THU'; break;
    case 5: answer = 'FRI'; break;
    case 6: answer = 'SAT'; break;
  }

  return answer;
}

console.log(solution(5, 24)); // TUE
console.log(solution(2, 29)); // TUE