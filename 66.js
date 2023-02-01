//나의 코드
const candidates = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";
const onlyABD = candidates.map((v) =>
  v.split("").filter((v) => rule.includes(v))
);
const ruleI = onlyABD.map((v) =>
  v.map((w) => (rule.includes(w) ? rule.indexOf(w) : null))
);
console.log(
  ruleI.map((v) =>
    v.join("") === v.sort((a, b) => a - b).join("") ? "가능" : "불가능"
  )
);

// 선생님 코드
function solution(allBlocks, rule) {
  let ans = [];
  for (let block of allBlocks) {
    ans.push(orderCheck(block, rule));
  }
  return ans;
}

function orderCheck(block, rule) {
  let temp = 0;
  for (let v of block) {
    if (rule.includes(v)) {
      if (temp > rule.indexOf(v)) {
        return "불가능";
      }
      temp = rule.indexOf(v);
    }
  }
  return "가능";
}
console.log(solution(["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"], "ABD"));
