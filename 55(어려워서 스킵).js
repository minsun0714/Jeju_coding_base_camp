//2 ** n - 1번의 순회횟수를 가짐

const route = [];

function hanoi(num, A, B, C) {
  //원판이 하나일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    route.push([A, C]);
    return 1;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, A, C, B);

  //가장 큰 원반은 목표기둥으로
  route.push([A, C]);

  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(num, B, C, A);
}
console.log(hanoi(3, A, B, C));
