function solution(keys, values) {
  let key = keys.split(' ');
  let value = values.split(' ');

  let obj = {};
  for (let i = 0; i < key.length; i++) {
    obj[key[i]] = parseInt(value[i]);
  }

  return obj;
}
console.log(solution("Yujin Hyewon", "70 100"));


