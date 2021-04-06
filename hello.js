// 3주차

console.log("hello world!");

let name = "신"+"정"+"호";

//--------------------------------------------------------------------------

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

//let date = new Date();

//console.log("year");
//console.log(date.getFullYear());
//console.log("month");
//console.log(date.getMonth()+1);
//console.log("day");
//console.log(date.getDay());
//console.log("hours");
//console.log(date.getHours());
//console.log("minutes");
//console.log(date.getMinutes());
//console.log("seconds");
//console.log(date.getSeconds());
//console.log("milliseconds");
//console.log(date.getMilliseconds());

//if (date.getHours() <12){
 //   console.log(`오전입니다.`);
//} if (date.getHours >= 12){
    //console.log(`오후입니다.`)
//}

// if -else

//----------------------------------------------------------------------

// 5주차
// 조건 중첩문

//else if (4.2 <= score && 4.5 < score){  // ||,! 와 같이 다른 논리 연산자도 사용 가능하다.

//}

// switch 문

let input = 32;

switch(input % 2){
    case 0:
        console.log("짝수 입니다.");
        break;

    case 1:
        console.log("홀수 입니다.");
        break;    
}

let date = new Date();

switch(date.getMonth()+1){
    case 1:
    case 2:
    case 11:
    case 12:
        console.log("winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("spring");
        break;
                
    case 6:
    case 7:
    case 8:
        console.log("summer");
        break;

    case 9:
    case 10:
        console.log("april");
        break;
}

// 배열

// let a = [54, 'b,', "abc", true, false]
// console.log(a);
// console.log(a[3]);

//----------------------------------------------------------------------------

//6주차

// let output = 0;
// 
// for(i = 1; i <= 100; i++){
    // output += i;
// }
// 
// console.log(output);

// let foo = [1, 2, 3, 4, 5, 6];
// 
// for (let i = foo.length; i>= 0; i--){
    // console.log(foo[i]);
// }


// let foo = [1,2,3,4,5,6];
// 
// for (let i = foo.length; i>= 0; i--){
    // console.log(`${i}번째 요소 : ${foo[i]}`);
    // }
// 
// for(let item in foo){
    // console.log(item);
// }

for (let i = 1; i < 10; i++){
    if(i % 2 == 0){
        
    }
}
