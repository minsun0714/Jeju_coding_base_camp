//나의 코드
const word = "aaabbbbcdddd";
let arr = [];
let count = 0;
word.split("").forEach((v, i, a) => {
  if (v !== a[i + 1]) {
    count++;
    arr.push(v + count);
    count = 0;
  } else {
    count++;
  }
});
console.log(arr.join(""));

//선생님 코드
const user = "aaabbbbcdddd";
let result = "";
let store = user[0];
let counter = 0;

for (let i of user) {
  if (i === store) {
    counter++;
  } else {
    result += store + String(counter);
    store = i;
    counter = 1;
  }
}
console.log(result + store + counter);
