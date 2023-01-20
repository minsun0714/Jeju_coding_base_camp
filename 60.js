//나의 코드
const students = ["김유정", "박현서", "최성훈", "홍유진", "강뭐시기", "박지호"];
students.sort();
students.forEach((v, i) => {
  const num = i + 1;
  console.log("번호: " + num + ", 이름: " + v);
});

// 선생님 코드
for (let key in students) {
  console.log(`번호: ${Number(key) + 1}, 이름: ${students[key]}`);
}
