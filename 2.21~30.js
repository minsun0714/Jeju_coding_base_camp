//문제22
//선생님 설명 보안(비트 연산자)

console.log(1&1);
console.log(1&0);
console.log(0&1);
console.log(0&0);

console.log(1|1);
console.log(1|0);
console.log(0|1);
console.log(0|0);


//문제23
//나의 풀이
console.log(parseInt(10/3));
//선생님의 풀이
console.log(Math.floor(10/3));

//문제24
//나의 풀이
function Large(text){
    return result = text.toUpperCase();
    
}
console.log(Large('mary'));

//선생님 풀이
// const name = 'mary';
// console.log(name.toUpperCase());
// const NAME = 'MARY';
// console.log(name.toLowerCase());

//문제25
//나의 풀이1
function width(n){
    return (n**2)*3.14;
}
console.log(width(3));
//나의 풀이2
function width(n){
    return Math.pow(n,2)*3.14;
}
console.log(width(3));

//문제26
//나의 풀이
    const objPlanet = {
        '수성' : 'Mercury',
        '금성' : 'Venus',
        '지구' : 'Earth',
        '화성' : 'Mars',
        '목성' : 'Jupiter',
        '토성' : 'Saturn',
        '천왕성' : 'Uranus',
        '해왕성' : 'Neptune',
    }
console.log(objPlanet.해왕성);

//선생님의 풀이
const objPlanet2 = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune',
}
console.log(objPlanet2.해왕성);

//27번
//나의 풀이
// const name = 'Yujin Hyewon'
// const score = '70 100'
// const arrayName = name.split(' ');
// const arrayScore =score.split(' ');

// const Yujin = `${arrayScore[0]}`
// const Hyewon = `${arrayScore[1]}`

// const obj = {Yujin, Hyewon};
// console.log(obj);
//선생님 풀이
const keys = ["지디", "지팍"];
const values = ["90", "10"];
let obj = {};
for(let i=0;i<keys.length;i++) {
console.log(keys[i]);
    obj[keys[i]]=values[i];
}
console.log(obj);

//28번 문제
//나의 풀이 = 선생님의 풀이
const word = '안녕하세요';
for(let i=0;i<word.length-1;i++){
console.log(`${word[i]}  ${word[i+1]}`);
}

//29번 문제
//나의 풀이 = 선생님의 풀이
function LargeYes_SmallNo(alphabet) {
   return alphabet === alphabet.toUpperCase() ? "YES" : "No";
}

console.log(LargeYes_SmallNo('L'));
console.log(LargeYes_SmallNo('f'));

//30번 문제
//나의 풀이
const sentence = "pineapple is yummy"
const word30 = "apple"
const arraySentence = sentence.split("");
const arrayWord = word30.split("");
console.log(sentence.indexOf(word30[0]));

//선생님 풀이
const sentence = "pineapple is yummy"
const word30 = "apple"
console.log(sentence.indexOf(word30[0]));