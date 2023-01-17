// 나의 코드
const num = 1000;

const arr = [...Array(num)]
  .map((_, i) =>
    String(i + 1)
      .split("")
      .filter((v) => v === "1")
  )
  .flat();
console.log(arr.length);

// 선생님 코드(for of 사용)
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
let count = 0;
for (let k of s) {
  k === "1" ? count++ : null;
}
console.log(count);

// 선생님 코드(for in 사용)
let count_forin = 0;
for (let k in s) {
  s[k] === "1" ? count_forin++ : null;
}
console.log(count_forin);

// 나의 코드 (정규표현식 사용)
const nums = [...Array(num)].map((_, i) => String(i + 1)).join("");
console.log(nums.match(/1/g).length);

// 선생님 코드(정규표현식 사용)
console.log(s.match(/1/g).length);

// 선생님 코드(노가다법)
// 10
// 11
// 12
// 13
// // .
// // .
// 998
// 999

// 998 %10 = 8;
// 998 / 10 = 99;

// 99%10 = 9;
// 99/10 = 9;

// 9%10 = 9;
// 9/10 = 0;

const obj = {};

for (let i = 0; i <= 1000; i++) {
  let tmp = i;
  while (tmp > 0) {
    let div = tmp % 10;
    if (obj[div]) {
      obj[div]++;
    } else {
      obj[div] = 1;
    }
    tmp = parseInt(tmp / 10, 10);
  }
}
console.log(obj[1]);
