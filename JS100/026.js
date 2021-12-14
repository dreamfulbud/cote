function solution(str) {
  const planet = {
    "수성": "Mercury",
    "금성": "Venus",
    "지구": "Earth",
    "화성": "Mars",
    "목성": "Jupiter",
    "토성": "Saturn",
    "천왕성": "Uranus",
    "해왕성": "Neptune"
  }
  return planet[str];
}
console.log(solution("지구"));


