//32번
//나의 풀이=선생님의 풀이
const sentence = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(sentence.split(' ').length);

//33번
//나의 풀이
const nums = '1 2 3 4 5'
console.log(nums.split(' ').reverse().join(' '));

//선생님의 풀이
const nums = '1 2 3 4 5'
const arr = nums.split(' ').reverse();
let reverseVal = "";

for(let i=0;i<arr.length;i++){
    reverseVal = reverseVal + arr[i] + " " ;
}    
console.log(reverseVal);

//문제34
//나의 풀이
const queue = '155 156 165 166 169 176'
console.log(queue.split(' ').sort((a,b)=>a-b));
queue === queue.split(' ').sort((a,b)=>a-b).join(' ') ?
console.log("YES") : console.log("NO");


//선생님의 풀이
const unsorted = "155 156 165 166 169 176";
let sorted = "";
sorted = unsorted.split(" ").sort(function(a,b){
return a- b;
})
.join(" ");

console.log(sorted);

if (unsorted === sorted) {
 console.log("Yes");
 } else {
 console.log("No");
 }

// 문제35
//선생님의 풀이 내풀이는 없어 어려워 ㄱ-
console.clear();
function one(n){
   //console.log(n);
   function two(x){
    return Math.pow(x, n)
    
    }
    return two;
 }
  const a =one(2);
  const b =one(3);
  const c =one(4);

  console.log(a(3));
  console.log(b(10));
  console.log(c(10));

  //문제36
  //나의 풀이
 const num = 9;
 let multiply = "";
for(i=1;i<=9;i++){
    multiply = multiply + i*num +" ";
  
}  console.log(multiply);

//선생님의 풀이
const num = prompt();
let result = "";
for(let i=0;i<9;i++){
   result = result + (i+1)*num +" ";
}  console.log(result);

//문제37
console.clear();
//나의 풀이
const list = "Mike Mike sandy sandy sandy sandy lina lina";
const array = list.split(' ');

let arr = [];
for(let i=0;i<array.length;i++){
const result = array.filter((item)=>(item) === array[i]);
arr[i] = result.length;
} 

let maxValue = arr.sort(((a,b)=> b-a))[0];
console.log(`00이가 총 ${maxValue}표로 반장이 되었습니다.`);

//선생님 풀이
const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = "";

for(let index in array){
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] +1;
}
console.log(result);

winner = Object.keys(result).reduce(function(a,b){
    console.log(a,b);
    return result[a] >result[b] ? a : b
});
console.log(winner);
console.log(`${winner}(이)가 ${result[winner]}표로 반장 당첨~~`);

//문제 38
//나의 풀이
const number = "97 86 75 66 55 97 85 97 97 95"
const score = number.split(' ').sort((a,b)=>b-a);
counter1=0;
for(let i=0;score[i]>=score[0];i++){  
    counter1++;
}

counter2=0;
for(let j=0;score[j]>=score[counter1];j++){  
    counter2++;
}

counter3=0;
for(let k=0;score[k]>=score[counter2];k++){  
    counter3++;
}
console.log(counter3);

//선생님의 풀이
const scores = "97 86 86 86 75 66 55 97 85 97 97 95".split(' ');

scores.sort((a,b) => a-b);
    
let top3 = [];
let count = 0 ;

while (top3.length < 4) {
  let value = scores.pop();
  if (!top3.includes(value)) {
    top3.push(value);                  
  }
  count++; 
}

console.log(top3);
console.log(count-1);

//문제39
//나의 풀이
const sentenceIncludingQ = "hqllo my namq is hyqwon";
const arrayIncludingQ = sentenceIncludingQ.split('');
result = arrayIncludingQ.map(item => {
    if(item === 'q'){
        return item = 'e';
    } else {
        return item;
    }
});

console.log(result.join(''));

//선생님의 풀이
const sentenceIncludingQ = "hqllo my namq is hyqwon";
const arrayIncludingQ = sentenceIncludingQ.split('q').join('e');
console.log(arrayIncludingQ);

//문제40
//나의 풀이
const weightLimit = 50;
const howManyPeople = 5;
const arrayOfWeight = [20, 20, 20, 20, 20];

arrayAscendingOrder = arrayOfWeight.sort((a,b)=>a-b);
let sum = 0;
let array = [];
for(let i=0;sum + arrayAscendingOrder[i]<=weightLimit;i++){
    
  sum = sum + arrayAscendingOrder[i];
  array.push(arrayAscendingOrder[i]);
}
console.log(sum);
console.log(array.length);

//선생님의 풀이
const arrayOfWeight = [10, 20, 20, 20, 20];
const weightLimit = 50;
const memberCount = 5;
let count = 0;
let totalWeight = 0;

for(let i=0; i<memberCount; i++){
    totalWeight = totalWeight + arrayOfWeight[i];
    if(totalWeight<=weightLimit){
        count++;
    }
}
console.log(totalWeight);
console.log(count);