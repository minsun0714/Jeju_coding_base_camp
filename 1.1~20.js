//문제1
//나의 풀이
var nums = [100, 200, 300, 400, 500];
const deleted = nums.splice(0,3);
console.log(deleted);
//선생님 풀이
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);

//문제2
//나의 풀이
var arr = [200, 100, 300];
arr.splice(2,1,10000, 300);
console.log(arr);
//선생님 풀이
var arr = [200, 100, 300];
arr.splice(2,0,10000);
console.log(arr);


//문제9
//나의 풀이
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/",month).concat('/',day," ").concat(hour).concat(":",minute).concat(":",second);

console.log(result);
//선생님 풀이
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/",month,'/',day," ",hour,":",minute,":",second);

console.log(result);


//문제10
//나의 풀이
const level = 13;

for(let i=1;i<=level;i++){
    let star = "*";
    for(let j=1;j<i;j++){
        star = star + "**";
    }
    let blank = " ";
    for(let k=level-1;k>=i;k--){
        blank = blank + " ";
    }
  
console.log(blank + star);
}
//선생님 풀이
const level = 5;

for(let i=1; i<=level;i++){
    let tree = "";
    //공백 증가 포문
    for(let k=1;k<=level-i;k++){
        tree = tree + " ";
    }

    //별 증가 포문
    for(let j=1;j<=i*2-1;j++){
        tree = tree+"*";
    }
    console.log(tree);
}
//문제11
//나의 풀이=선생님 풀이
let s = 0;
for(let i=1;i<=100;i++){
    s+=i;
}
console.log(s);
//5050   

//문제12
//나의 풀이
class Wizard{
    constructor (health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack = () => {
        console.log("파이어볼");
    }
}
//선생님 풀이
class Wizard{
    constructor (health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack () {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//문제13
//나의 풀이
const array = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
let n = 8;
console.log(array[n-1]);
//선생님 풀이
const array = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
const n = prompt('몇 번째를 원훼');
console.log(array[n-1]);

//문제14
//나의 풀이
const number = prompt("어떤 숫자를 입력하실?");

if(number%3 === 0){
  result = "짝";
} else {
  result = number;
}

console.log(result);
//선생님 풀이
const n = prompt("어떤 숫자를 입력하실?");

if(n%3 === 0 && n != 0){
  console.log("짝");
} else {
  console.log(n);
}
//문제15
//나의 풀이
const name = prompt("");
console.log("안녕하세요. 저는 "+name+"입니다.");
//선생님 풀이
const name = prompt("");
console.log(`안녕하세요. 저는 ${name}입니다.`);
//문제16
//나의 풀이
let sentence = "거꾸로";
num = sentence.length - 1;
word = ""
for(i=0;i<=num;i++){
word = word + sentence[num-i];}
console.log(word);

//선생님 풀이
const str = "거꾸로";

console.log(str.split('').reverse().join(''));
//문제17
//나의 풀이=선생님 풀이
const height = prompt("키를 입력하거라");

if(height >= 150){
    console.log("YES")
} else {
    console.log("NO")
}

//문제18
//나의 풀이
const score = prompt();
sum = 0
for(let i=0;i<=2;i++){
sum = sum + Number(score.split(' ')[i]);
}
console.log(sum/3);
//선생님 풀이
const score = prompt().split(" ");
let sum = 0;

for(let i=0;i< score.length;i++){
sum = sum + parseInt(score[i], 10);
}
console.log(Math.floor(sum/score.length));

//문제19
//나의 풀이
function power (a,b){
    answer = a ** b;
    return answer;
    }
    console.log(power(10,2));
//선생님 풀이
const num = prompt().split(" ");
console.log(Math.pow(parseInt(num[0]), parseInt(num[1])));                      

//문제20
//나의 풀이
const number = prompt().split(" ");

const num1 = parseInt(number[0]/number[1], 10);
const num2 = number[0]%number[1];

console.log(`${num1} ${num2}`);
//선생님 풀이
const num = ["7", "2"];

let val1 = Math.floor(parseInt(num[0], 10)/parseInt(num[1],10));
console.log(val1);
  
let val2 = parseInt(num[0], 10)%parseInt(num[1], 10);
console.log(val2);