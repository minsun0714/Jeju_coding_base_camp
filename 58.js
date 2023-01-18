// 나의 코드
const n = 123456789;
const reversed = String(n).split("").reverse();
const withComma = reversed
  .map((v, i) => ((i % 3 === 0) & (i !== 0) ? v + "," : v))
  .reverse()
  .join("");
console.log(withComma);

//선생님의 코드 (메소드 활용)
console.log(n.toLocaleString());

// 나의 코드 (재귀함수)
let arr = [];
function comma(n) {
  let num = String(n);
  if (num.length <= 3) {
    arr.unshift(num.substring(num.length - 3));
    console.log(arr.join(""));
    return;
  } else {
    arr.unshift("," + num.substring(num.length - 3));
    num = num.substring(0, num.length - 3);
  }
  comma(num);
}
console.log(comma(123456789));

// 선생님 코드 (재귀함수)
function commas(s) {
  if (s.length <= 3) return s;
  else return commas(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
}
console.log(commas("12345345356789"));
