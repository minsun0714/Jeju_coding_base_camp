// 나의 코드
let prth = "(((()()()())))";

while (
  prth !== prth.split("()").join("") ||
  prth !== prth.split("[]").join("") ||
  prth !== prth.split("{}").join("")
) {
  prth = prth.split("()").join("");
  prth = prth.split("[]").join("");
  prth = prth.split("{}").join("");
}
// console.log(!prth.length ? "YES" : "NO");

// 강의 내용
// 1. (())
// 2. (((()()()())))
// 3. ()()()
// 4. )))(((
// 5. ())
// 6. ())()

function mathBrackets(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === "(" ? count++ : count--;
  }
  if (count) return false;
  let bracket = [];
  for (let i in arr) arr[i] === "(" ? bracket.push("(") : bracket.pop();
  return !bracket.length ? "YES" : "NO";
}
console.log(mathBrackets("(()())"));
