// 나의 코드
const words = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const date = ["c", "a", "b", "j", "a", "j", "c", "d"];
console.log(date.map((v) => words.indexOf(v)).join(""));

// 선생님 코드
const user_s = "aacdddddddddfffffffffgghhh";
console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
  user_s.match(/c/g).length
}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
  user_s.match(/f/g).length
}${user_s.match(/g/g).length}${user_s.match(/h/g).length}
`);
