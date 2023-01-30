// 나의 코드
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let arr = [];
a.forEach((v, i) => (i % 2 === 0 ? arr.push([v, b[i]]) : arr.push([b[i], v])));
console.log(arr);

//선생님 코드
const ans = a.map(function (v, i) {
  if (i % 2 === 0) {
    return [v, b[i]];
  } else {
    return [b[i], v];
  }
});
console.log(ans);
