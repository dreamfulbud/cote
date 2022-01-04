// 민규의 악수
function solution(schedule, time) {
  let result = [];
  schedule.forEach(element => {
    const hour = element.split(':')[0] - time.split(':')[0];
    const min = element.split(':')[1] - time.split(':')[1];

    if ((hour < 0) || (hour === 0 && min < 0)) {
      result.push("지나갔습니다");
    } else {
      if (min < 0) {
        result.push(`${String(hour - 1).padStart(2, "0")}시간 ${String(60 + min).padStart(2, "0")}분`);
      } else {
        result.push(`${String(hour).padStart(2, "0")}시간 ${String(min).padStart(2, "0")}분`);
      }
    }
  });
  return result;
}
console.log(solution(["12:30", "13:20", "14:13"], "12:40"));//['지나갔습니다', '00시간 40분', '01시간 33분']
console.log(solution(["12:30", "13:20", "14:13"], "01:40"));//['지나갔습니다', '00시간 40분', '01시간 33분']


function solution2(버스시간, 기준시간) {
  let answer = [];
  기준시간 = 기준시간.split(':').map(n => parseInt(n, 10));
  기준시간 = (기준시간[0] * 60) + 기준시간[1];

  for (let i in 버스시간) {
    let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
    time = (time[0] * 60) + time[1];

    if (time < 기준시간) {
      answer.push('지나갔습니다');
    } else {
      let 시간 = parseInt((time - 기준시간) / 60, 10);
      let 분 = (time - 기준시간) % 60;
      answer.push(String(시간).padStart(2, 0) + '시간 ' + String(분).padStart(2, 0) + '분');
    }
  }
  return answer;
}

console.log(solution2(["12:30", "13:20", "14:13"], "12:40"));
console.log(solution2(["12:30", "13:20", "14:13"], "01:40"));
