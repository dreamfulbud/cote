// 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

// answer = (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ');

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let index = cache.indexOf(city);
    if (index !== -1) {
      //hit
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      //miss
      time += 5;
      cache.push(city);
      if (cacheSize < cache.length) {
        cache.shift();
      }
    }
  }
  return time;
}
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));