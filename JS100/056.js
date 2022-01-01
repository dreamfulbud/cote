// 객체의 함수 응용
// 데이터
nationWidth = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England': 242900,
}

let result = [];
const koreaWidth = nationWidth['korea'];

delete nationWidth['korea'];
const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

let max = Math.min(...values);

for (let i = 0; i < entry.length; i++) {
  if (entry[i][1] === max) {
    result.push(entry[i][0]);
    result.push(entry[i][1] - koreaWidth);
  }
}
console.log(...result);


//England 22023

