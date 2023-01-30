//나의 코드
const limit = 21;
const howMany7kg = parseInt(limit / 7);
const howMany3kg = (limit % 7) / 3;
console.log((limit % 7) % 3 === 0 ? howMany7kg + howMany3kg : -1);

// 선생님 코드
let n = 21;
let result = 0;
while (true) {
  if (n % 7 == 0) {
    result += parseInt(n / 7, 10);
    console.log(result);
    break;
  }

  n -= 3;
  result += 1;
  if (n < 0) {
    console.log(-1);
    break;
  }
}
