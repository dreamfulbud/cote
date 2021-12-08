function avg(arr) {
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }
  return parseInt(sum / arr.length);;
}
console.log(avg([20, 30, 40]));
console.log(avg([16, 18, 21]));
