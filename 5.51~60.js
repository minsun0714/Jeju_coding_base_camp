//51번
// [1,3,5,4,8,6,7,2]
// [1,3,5,4],[8,6,7,2]
// [1,3],[5,4],[8,6],[7,2]
// [1],[3],[5],[4],[8],[6],[7],[2]
// [1,3],[4,5],[6,8],[2,7]
// [5],[, 6, 7, 8]
// [1, 2, 3, 4, 5,6,7,8]
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
//정렬하고 합치는 부분
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

// const array = prompt().split(' ').map(n => parseInt(n, 10));
const array = [1, 3, 5, 4, 8, 6, 7, 2];
console.log(mergeSort(array));
