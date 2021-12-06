const planets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];

let planet = function (n) {
  return planets[n - 1];
}

console.log(planet(1));
console.log(planet(3));