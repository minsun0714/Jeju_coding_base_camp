//나의 코드
const word = "복잡한 세상 편하게 살자".split("");
const firstLetters = word.reduce((acc, cur, i, a) => {
  i === 0 || a[i - 1] === " " ? acc.push(cur) : null;
  return acc;
}, []);
console.log(firstLetters.join(""));

// 선생님 코드
const user_s = "복잡한 세상 편하게 살자".split(" ");
let res = "";

for (let v of user_s) {
  res += v[0];
}
console.log(res);
