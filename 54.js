//나의 코드
const input = "1 8 3 4 2 5";
const arr = input.split(" ");
const sorted = arr.slice().sort((a, b) => a - b);
const res = sorted.map((v, i, a) =>
  Number(a[i + 1]) === Number(v) + 1 ? "O" : "X"
);
console.log(
  res.filter((v) => v === "O").length === sorted.length - 1 ? "YES" : "NO"
);

//선생님의 코드
const n = "1 3 4 2 5".split(" ");

n.sort((a, b) => a - b);

function solution(n) {
  for (i = 0; i < n.length - 1; i++) {
    if (Number(n[i]) + 1 !== Number(n[i + 1])) {
      return "NO";
    }
  }
  return "YES";
}
console.log(solution(n));
