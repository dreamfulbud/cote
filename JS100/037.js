function solution(str) {
  str = str.split(' ');
  let person = '';
  let count = 0;

  let list = [...new Set([...str])];

  let leader = {};
  for (let i = 0; i < list.length; i++) {
    leader[`${list[i]}`] = 0;
  }

  for (let i = 0; i < Object.keys(leader).length; i++) {
    let personName = Object.keys(leader)[i];
    for (let j = 0; j < str.length; j++) {
      if (personName == str[j]) {
        leader[personName] += 1;
      }
    }
  }

  let leaderVal = Object.values(leader);

  for (let i = 0; i < leaderVal.length; i++) {
    if (leaderVal[i] > count) {
      count = leaderVal[i];
      person = Object.keys(leader)[i];
    }
  }
  return `${person}(이)가 총 ${count}표로 반장이 되었습니다.`;

}
console.log(solution("원범 원범 혜원 혜원 혜원 혜원 유진 유진")); //혜원(이)가 총 4표로 반장이 되었습니다.



