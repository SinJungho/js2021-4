// 3주차

console.log("hello world!");

let name = "신"+"정"+"호";

// 4주차

console.log(`5+3 = ${5+3}`);

// 대입 연산자
let a = 10;

a += 10;
console.log(a);
a -= 5;
console.log(a);
a *= 2;
console.log(a);
a /= 3;
console.log(a);
a %= 3;
console.log(a);

// 증감 연산자
a++;
console.log(a);

// 자료형 검사

typeof (123);
typeof ("123");
typeof (true);

// 상수
const con1 = "string value";
console.log(con1);

// 조건문 if()

let date = new Date();

console.log("year");
console.log(date.getFullYear());
console.log("month");
console.log(date.getMonth()+1);
console.log("day");
console.log(date.getDay());
console.log("hours");
console.log(date.getHours());
console.log("minutes");
console.log(date.getMinutes());
console.log("seconds");
console.log(date.getSeconds());
console.log("milliseconds");
console.log(date.getMilliseconds());

if (date.getHours() <12){
    console.log(`오전입니다.`);
} if (date.getHours >= 12){
    console.log(`오후입니다.`)
}

// if -else


