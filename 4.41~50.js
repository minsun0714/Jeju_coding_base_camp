//41번문제
//나의 풀이
const num = 1;
let array = [];
let count=0;
for(let i=0; i<num;i++) {
    array.push(num-count);
    count++;
}
if(num<=0 || isNaN(num)){
    console.log('양의 정수를 입력하세요')
}
else if(array.filter((item)=>num%item===0).length===2){
    console.log('YES');
} else {
    console.log('NO');
}
//선생님의 풀이
const prime = 11;

function primeFunc(n){
  
    for(let i=2;i<n;i++){
        if(n%i===0){
            console.log('NO');
            return false;
        }
        }
        if(n===1){
            console.log('NO');
            return false;    
        }
        console.log('YES');
}
primeFunc(prime);

//42번문제
//나의 풀이
function whatDayIsIt (a,b){
    const now = new Date;
    const arrayOfDay = ['sun','mon','tue','wed','thu','fri','sat'];
    now.setFullYear(2020);
    now.setMonth(a-1); // ⭐️⭐️⭐️0: 1
    now.setDate(b);
    return result = arrayOfDay[now.getDay()];

}
whatDayIsIt(5,24);
console.log(result);

//선생님의 풀이
const day = ['sun','mon','tue','wed','thu','fri','sat'];

function solution(a,b){
    const theDay = new Date(`2020-${a}-${b}`);
    console.log(day[theDay.getDay()]);
}
solution(5,24);

//43번
//나의 풀이1
const dec = 32;
console.log(dec.toString(2));

//나의 풀이2
let dec = 32;
let arrBinary = [];

for(i=0;dec>=1;i++){
    arrBinary.unshift(dec%2);
    dec = parseInt(dec/2);
}
console.log(arrBinary.join(""));

//선생님의 풀이
 let dec = prompt();
let arrBinary = [];

while(dec){
    arrBinary.push(dec%2);
    dec = Math.floor(dec/2);
}

console.log(arrBinary.reverse().join(""));

//44번
//나의 풀이
const num = '18234';
console.log(num.split(''));
let array = [];
for(let i=0;i<num.split('').length;i++){
    array.push(parseInt(num[i]));
}

let result = array.reduce((sum,value)=> sum+=value,0);
console.log(result);

//선생님 풀이
let num = "1234";
let sum =0;

while(num){
    sum = sum + num%10;
    num = Math.floor(num/10);
}
console.log(sum);

//45번
//나의 풀이
const date = new Date();
console.log(date.getTime());

//선생님의 풀이
const date = new Date();
console.log(Math.floor(date.getTime()/1000/(60*60*24*365)+1970));

//문제46
//나의 풀이
const number = '1234567891011121314151617181920';
arrayStringType = number.split('');
arrayNumberType = [];
for(let i=0;i<arrayStringType.length;i++){
    arrayNumberType.push(Number(arrayStringType[i]));

}
console.log(arrayNumberType.reduce((sum,value)=>(sum+=value),0));


//선생님의 풀이
let array = [];
let total = 0 ;

const lastNumber = 20;
for(let i=0;i<lastNumber;i++){
  array[i] = i+1;
}

array.forEach(n => {
    while(n){
        total += n%10;
        n=Math.floor(n/10);
    }
});
console.log(total);

//문제 47
//나의 풀이(몰라서 일단 map으로 해결)
const people = new Map ([
    ['이호준' , "01050442903"],
    ['이호상' , "01051442904"],
    ['이준호' , "01050342904"],
    ['이호준' , "01050442903"],
    ['이준' , "01050412904"],
    ['이호' , "01050443904"],
    ['이호준' , "01050442903"],
]);


console.log(people.size);

//선생님 풀이
const people = {
    이호준 : "01050442903",
    이호상 : "01051442904",
    이준호 : "01050342904",
    이호준 : "01050442903",
    이준 : "01050412904",
    이호 : "01050443904",
    이호준 : "01050442903",
    };

let result = new Set();
for(let key in people){
    result.add(people[key]);
}
console.log(result.size);

//문제48
//나의 풀이 = 선생님의 풀이
const alphabet = 'AAABBBcccddd'.split('');
let array = [];
for(let i=0;i<alphabet.length;i++){
    if(alphabet[i]===alphabet[i].toUpperCase()){
        array.push(alphabet[i].toLowerCase());
    } else {
        array.push(alphabet[i].toUpperCase());
    }
    
}console.log(array.join(''));

//문제49
//나의 풀이
const StringTypeArray = '10 9 8 7 6 5 4 3 2 1'.split(' ');
let NumberTypeArray = [];
for(let i=0;i<StringTypeArray.length;i++){
    NumberTypeArray.push(Number(StringTypeArray[i]));
}
console.log((NumberTypeArray).sort((a,b)=>(b-a))[0]);

//선생님의 풀이
let result = '10 9 8 7 6 5 4 3 2 1'
result = result.split(" ").map(n=>{
  return parseInt(n,10);
});
result.sort((a,b)=> {
  return b-a;
});

console.log(result[0]);

