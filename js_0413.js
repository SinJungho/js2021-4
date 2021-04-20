// let a = function(){
//     console.log("첫 줄");
//     console.log("두번째 줄");
//     console.log("셋째 줄");
// }

// let bar = 123;

// console.log(a);
// console.log(bar);

// 선언적 함수

// function foo(){
//     console.log("첫 줄");
//     console.log("두번째 줄");
// }

// console.log(foo);

// 화살표 함수

// let foo = () =>{
//     console.log("1st line");
//     console.log("2st line");
// }

// foo();
// console.log(foo); 

// 함수 기본 형태

// function power(x){
//     return x * x;
// }

// console.log(power(20));
// console.log(power(10));

// function multi(x, y){
//     return x * y;
// }

// function print(message){
//     console.log(`"${message} (이)라고 말했습니다."`);
// }

// console.log(multi(52, 273));
// console.log(multi(103, 22));

// print("안녕하세요");
// print("house");


// 함수의 기본 활용 형태
// function sum(min, max){
//     let output =0;
//     for(let i = min; i <= max; i++){
//         output += i;
//     }
//     return output;
// }
// sum();
// console.log(sum(1, 100));

// 함수 매개 변수 초기화

// function print(name, count){
//     if(!count){
//         count = count || 1;
//     }
//     console.log(`${name} 이/가 ${count}개 입니다.`);
// }

// print("사과", 10);
// print("사과");

// 콜백 함수

// function callTenTimes(callback){
//     for(let i = 0; i <= 10; i++){
//         callback();
//     }
// }

// callTenTimes(function (){
//     console.log("함수 호출");
// })

// 표준 내장 함수

// let inputA = "52";
// let inputB = "52.123";
// let inputC = "1402동";

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC));

// 타이머 함수

// setTimeout(function(){
//     console.log("1s gone");
// }, 1000);

// setInterval(function (){
//     console.log("1s gone");
// }, 1000);

// 9주차