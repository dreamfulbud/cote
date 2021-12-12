// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  var answer = '';

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
  return answer;
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // leo
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // vinko
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // mislav
