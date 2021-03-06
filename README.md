# 신정호 [202030421]

## [06월 01일]
### 오늘 배운 내용 요약

### 14주차

### 버전에 따른 코드 사용 여부

IE -> var

최신 웹 브라우저 -> let, const

var를 사용해도 오류는 생기지 않는다

### 객체 모델

#### screen 객체

웹 브라우저 화면이 아니라 웹 브라우저 그 자체이다.

```javascript
width() -> 화면의 너비
heigth() -> 화면의 높이
availWidth()-> 실제 화면에서 사용 가능한 너비
availHeigth()-> 실제 화면에서 사용 가능한 높이
...

```

---

### JQuery

```javascript
Basic

$(value1).method(parameter1, parameter2);
```

```javascript
//css 선택자

$('h1') -> h1 태그를 선택한다.
$('h1.logo') -> h1 태그 중 logo 클래스를 선택한다.
$('h1#logo') -> h1 태그 중 logo 아이디를 선택한다.

```

```javascript
//each()

$('h1').each(function (index, item){

});

```

>odd, even 선택자
>> odd -> 홀수번째 선택자
>> even -> 짝수번째 선택자

### 문서 객체 조작

```javascript
text() -> html 태그 내부의 문자를 조작한다.
html() -> html 태그 내부의 문자를 조작하면서 html를 인식한다.
```
```html
<!-- text(), html() 메서드 get 형태 예제 -->
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>jQuery Text</title>
    <script src="jquery-3.1.0.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
    <script>
        $('document').ready(function (){
            alert($('p').text());
            alert($('p').html());
        })
    </script>
</head>
<body>
    <p>Test1</p>
    <p>Test2</p>
    <p>Test3</p>
</body>
</html>
```
>text() -> 모든 p 태그 내부 문자를 출력
>html() -> 첫 번째로 선택된 p 태그 문자를 출력

### 스타일 조작

```javascript
css() -> 스타일을 조작한다.

$('html').css({
    color : 'blue',
    backgroundColor : 'white',
})
```
>JSON 형식으로도 사용 가능하다.

### 이벤트

```javascript
on() -> 이벤트를 연결한다.
off() -> 이벤트를 제거한다.

//이벤트 직접 연결

$('선택자').on(<이벤트이름>, <콜백함수>);
```

### 애니메이션

```javascript
animate() -> 애니메이션을 적용한다.

//애니메이션 연결

$('선택자').animate(<속성>, <시간>, <콜백함수>);
```

---
# 신정호 [202030421]

## [05월 25일]
### 오늘 배운 내용 요약

### 13주차

### express 모듈

```javascript
express() -> 서버 애플리케이션 객체를 생성
app.use() -> 요청이 왔을 때 실행할 함수를 지정
app.listen() -> 서버를 실행
```
#### 페이지 라우팅

```javascript
get(path, callback) -> GET 요청이 발생할 때 이벤트 리스너 지정
post(path, callback) -> POST 요청이 발생할 때 이벤트 리스너 지정
```

```javascript
const express = require('express');
const app = express();

app.get('/image', (request, response) => {
    fs.readFile('333333.png', (error, data) => {
        const id = request.params.id;
        response.send(`<h1>${id} Page</h1>`);
    });
});

app.listen(52272, () =>{
    console.log("server running at http://127.0.0.1:52272");
});
```

### 요청과 응답

```javascript
send() -> 데이터 본문을 제공
status() -> 상태 코드 제공
set() -> 헤더를 설정
```

```javascript
const express = require('express');
const app = express();

app.get('/image', (request, response) => {
    fs.readFile('333333.png', (error, data) => {
        response.status(404);
        response.set('methodA', 'methodB');
        response.set({
            'methodA' : 'AFSFASAF',
            'methodB' : 'asfasdfa',
        })
        response.send(`맘대로 적어보세요`);
    });
});

app.listen(52272, () =>{
    console.log("server running at http://127.0.0.1:52272");
});
```


---

# 신정호 [202030421]

## [05월 18일]
### 오늘 배운 내용 요약

### 12주차

### Node.js 기본

### process 객체

`process` : 프로세스 정보를 제공, 제어 할 수 있는 객체

```javascript
exit() : 프로그램을 종료합니다.
```
### event 개요

`on(<이벤트 이름>,<이벤트 핸들러>)` : 이벤트를 연결합니다.

> 이벤트 핸들러 : 이벤트가 발생했을 때 호출할 함수

```javascript
exit : 프로세스가 종료할 때 발생
uncaughtException : 예외가 일어날 때 발생
```

```javascript
process.on("exit", ()=>{
    console.log("프로세스가 종료 되었습니다.");
})
```
>ex) process 객체의 이벤트

---

### os 모듈

```javascript
const os = require("os");
객체를 생성 후 -> 메서드 사용
```
>os라고 꼭 이름이 명시된 것이 아님 사용자 임의대로 바꾸기 가능.

---
### url

```javascript
const url = require("url");
url 모듈을 추출
```
```javascript
url 모듈 메서드

parse(urlStr []) -> url 문자열을 url 객체로 변환
```

### FileSystem 모듈

```javascript
const fs = require("fs");

모듈 이름을 약어로 사용함
```
#### 파일 읽기 메서드

```javascript
fs.readFileSync(<file_name>); -> 동기적으로 파일을 읽는다.
fs.readFile(<file_name>, <callback_function>); -> 비동기적으로 파일을 읽는다.
```

```javascript
const fs = require("fs");
const file = fs.readFileSync("textContent.txt");
console.log(file);
console.log(file.toString());

한 번에 다운을 받는다 -> 몇 백 GB, 몇 TB을 다운을 받기에는 무리가 있다.
```

```javascript
const fs = require("fs");
const file = fs.readFileSync("textContent.txt", (error, file) =>{
    console.log(file);
    console.log(file.toString());
});

스스로 한 만큼만 다운을 받아 보여줌 -> 동기적으로 파일을 읽는 방식보다 효율적임
```

>다만, 동기적으로 읽는 방식보다 비동기식으로 읽는 방식이 더 중요하다.
>왜냐하면 파일이 크면 그만큼 읽는 시간이 걸리기 때문이다.
#### 파일쓰기

```javascript
fs.writeFileSync(<file_name>,<String>); -> 동기적으로 파일을 쓴다.
fs.writeFile(<file_name>,<String>,<callback_function>); -> 비동기적으로 파일을 쓴다.
```

```javascript
const fs = require("fs");
const file = fs.writeFileSync("textContent.txt");
console.log(file);
console.log(file.toString());

한 번에 다운을 받는다 -> 몇 백 GB, 몇 TB을 다운을 받기에는 무리가 있다.
```

```javascript
const fs = require("fs");
const file = fs.writeFileSync("textContent.txt", (error, file) =>{
    console.log(file);
    console.log(file.toString());
});
```
#### 파일처리와 예외처리

```javascript
const fs = require("fs");
fs.readFile("test.txt", (error, file) => {
    if(error){
        console.log("파일을 읽어 들이는데 문제가 발생함.");
        console.log(error);
    }else{
        console.log(file);
        console.log(file.toString);
    }
});
```

---

# 신정호 [202030421]
## [05월 11일]
### 오늘 배운 내용 요약

### 11주차

### Date 객체

Date 객체는 주로 ```getXX(), setXX()```로 이뤄져있다.
그에 따라 **Year, Month, Hour** 등 메서드를 사용한다.

>Date 객체를 사용할 때는 1970년 1월 1일 부터 지금까지의 시간을 밀리초로 계산이 되기 때문에 반드시 곱해주거나 나눠줘야 정상적으로 나온다.

---
### Array 객체

Array 객체 중에서 자기 자신을 변화시키는 메서드가 있다.

```javascript
pop() ->  배열의 마지막 요소를 제거하고 리턴한다.
push() -> 배열의 마지막 부분에 새로운 요소를 추가시킨다.
reverse() -> 배열의 요소 순서를 뒤집는다.
sort() -> 배열의 요소를 정렬한다. (그러나 많이 쓰이지 않는다. -> 가독성이 떨어지고 일기 어렵기 때문에.)
splice() -> 배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 반환한다.
```

>**ECMAScript에 추가된 Array 객체의 메서드
>forEach() - 배열의 요소를 하나씩 뽑아 반복을 돌린다.
>map() - 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만든다.
>filter() - 콜백 함수에서 true를 반환하는 것으로만 새로운 배열을 만든다.

---
### JSON 객체

```javascript
[
    {
        "name": "짜장면",
        "price": 4500
    },
    {
        "name": "짬뽕",
        "price": 5500
    },
    {
        "name": "탕수육",
        "price": 8000
    }
]
```
>JSON을 쓸 때 주의할 점
>>마지막에 쉼표(,)를 붙여도 되고 생략해도 된다.
>>문자열은 큰따옴표("")로 감싸야 한다.
>>모든 키는 큰 따옴표("")로 감싸야 한다.
>>숫자,문자열,불 자료형만 사용할 수 있다.

---
### 예외처리

예외: 프로그램을 실행하는 동안 문제가 발생하면 프로그램이 자동으로 종료가 되는것
예외처리 : 예외에 해당하는 문제를 대처할 수 있게 하는 것

---

### try, catch, finally 키워드

```javascript
try{
    //예외가 발생하면
} catch (Exception) {
    //여기서 처리 한다.
} finally{
    //여기는 무조건 실행이 된다.
}
```

>catch, finally 구문은 생략이 가능하다.
>강제 예외 처리를 할 때는 'throw'키워드를 쓴다.
>'name, message' 속성을 이용해 코드 내부의 예외처리를 확인이 가능하다. 


---
# 신정호 [202030421]
## [05월 04일]
### 오늘 배운 내용 요약

### 10주차 

### 표준 내장 객체

자바스크립트에서는 개발자들을 위해 다양한 객체를 제공한다. 더 자세한 정보는  

[모질라 MDN] (https://developer.mozilla.org/ko/docs/Web/JavaScript)

---
### 기본 자료형과 객체 자료형의 차이

기본 여섯 가지 자료형 (숫자, 문자열, 불, 객체 , undefined)이 제공이 됨

숫자, 문자열, 불을 생성할 때 typeof 연산자를 사용하면 'object' 문자가 출력이 된다.
-> 즉, 객체의 의미를 담고 있다.

기본 자료형 숫자의 속성이나 메소드를 사용하면 자동으로 Number 객체 자료형으로 변환 되어 속성이나 메서드를 사용할 수 있다.

---

### Number 객체

Number 객체를 생성하는 방법은 2가지이다.

1. let foo = 273;
2. let bar = new Number(273);

Number 객체가 가진 메서드는

toExponential() -> 지수 표시로 나타내는 문자열
toFixed() -> 고정 소수점 표시로 나타내는 문자열
toPrecision -> 지수표시 및 고정 소수점 표시로 나타낸 문자임을 명시

---

### String 객체

자바 스크립트에서 가장 많이 쓰이는 객체 중 하나이다.

String 객체를 생성하는 방법 또한 2가지가 존재한다.

1. let foo = "hello";
2. let bar = new String("hello");

String 객체에 존재하는 메서드 중에 대표적으로
 charAt(); -> 괄호에 위치 하는 문자를 반환한다. 
 indexOf(); -> 앞에서부터 일치하는 문자열의 위치를 반환한다.
 slice(); -> 특정 위치의 문자열을 추출해 반환한다.
 split();

등이 있다.

---

# 신정호 [202030421]
## [04월 27일]
### 오늘 배운 내용 요약

### 9주차 

### 익명 함수와 화살표 함수의 차이

익명함수 생성 후 호출

function (){  
    console.log(this);  
}  
  
();  

화살표 함수 생성 후 바로 호출
() => {  
    consloe.log(this);  
}  

---
### 객체

배열과 객체는 서로 홉사한 면이 많다

let <배열이름> = [1,2,3,4,5];

let product = {  
    제품명: '삼성 노트북',  
    유형: '경량화 노트북',  
    가격: '1,000,000',  
    as기간: '3년',  
};  
console.log(product);   

로 표현이 가능하다. 또한 객체를 생성한 다음 key를 입력해 접근도 가능하다.

product.['유형'] -> 경량화 노트북

### 속성과 메서드

배열 내부에 있는 값 하나하나를 요소라고 한다.

객체 내부에 있는 값 하나하나를 속성이라고 한다.

배열처럼 객체의 속성에도 다양한 자료형을 쑬 수 있고 이 중에서 함수인 속성을 메서드라고 한다.

자기 자신이 가지고 있는 속성을 명시 할 때는 this라는 키워드를 쓴다.

---

# 신정호 [202030421]
## [04월 13일]
### 오늘 배운 내용 요약

### 7주차 
### 익명함수

익명함수란 이름이 없는 함수이다.

>자바스크림트는 모든 것을 객체로 봄 -> 함수 또한 자료형으로 취급한다.

>let functionName = fuuction (){ };

변수를 생성해서 객체처럼 사용한다.

---
### 리터럴

변수 안에 들어 있는 상태가 아니라 문자 그대로 자료를 나타내는 것을 뜻한다.
즉, 변수 안에 있는 그 자체의 값이라고도 말할 수 있다.

---
### 선언적 함수

>function functionName(){ }

---

### 기타 자바스크립트 함수에 관하여

익명함수, 선언적 함수 둘 다 출력이 가능하다.

일반적인 함수를 만들 때는 선언적 함수를 사용한다.  
    -> 함수에 이름이 있기 때문에 버그를 발생해도 추적하기 쉽다.

함수의 매개 변수로 전달하는 콜백 함수 등을 만들 때는 화살표 함수를 사용한다.

---
### 화살표 함수

> () => { }
function 키워드를 생략한 함수이다.

---

### 함수의 기본 형태 

함수를 사용함으로서 얻는 이점은 크게 2가지이다.  

    1.유지 보수에 유리
    2.코드의 양을 줄여 중복 또한 줄일수도 있다.

---

### 함수의 기본 활용 형태

let output = <초깃값>;  
    -> 변수를 통해 return 한다.

기본 기능에 코드를 추가하면 기능이 복잡해짐  
    -> 자주 사용하는 기능은 분리 하는 것이 메소드의 초점이다.

코드를 정리하고 알아보기 쉽게 만드는 목적도 있음  
    -> 이것을 리팩토링이라 한다.

---

### 콜백 함수

함수의 매개 변수로 전달되는 함수를 콜백함수라고 한다.


---
# 신정호 [202030421]
## [04월 06일]
### 오늘 배운 내용 요약

### 6주차

for 문에서 조건문을 수행할때 순서에 대해 조심해야 하는 부분이 있다.

>ex) for (let i = 0; i < 100; i++){   
>    output += i;    
>}    

1. let i = 0; i <= 100; 을 수행
2. output += i; 를 수행
3. i++ 를 수행

---

### for in 반복문, for of 반복문

>for (let 인덱스 of 배열){    
>    
>}    

인덱스 값만 필요할 때 쓰인다.

>for (let 요소 of 배열){  
>      
>}  

인덱스는 필요 없고 값만 필요할 때

---

### 중첩 반복문

if, while, for 과 같은 조건 및 반복문을 이중으로 써서 사용하는 문법이다.

ex) while(true){  
    for (let i = 0; i < 100; i++){  
        console.log(i);  
    }    
}  

---
### break, continue keyword

break 키워드는 조건문 및 반복문을 빠져 나갈 때 사용한다.

continue 키워드는 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행할 때 사용한다.

---
### 자주 쓰이는 배열 함수

push : 배열의 끝에 원하는 값을 추가하는 함수

pop : 배열의 마지막 주소에 있는 값을 제거해주는 함수

splice : 정해진 범위의 문자, 숫자를 추출하고 나머지 자료들은 삭제한다.

slice : 정해진 범위의 문자, 숫자를 추출한다.

join : 배열값 사이에 원하는 문서를 삽입해서 반환한다.

---
## 스코프 

변수를 사용할 수 있는 범위를 나타내는 것을 스코프라고 한다.

스코프 == 블록({ }) 라고 할 수도 있다.

블록 내부에 있는 변수에만 쓸 수 있다. --> 지키지 않으면 오류가 생기게 된다.

---
### 5주차


---
# 신정호 [202030421]
## [03월 30일]
### 오늘 배운 내용 요약

### 5주차
### 중첩 조건문

>조건문 안에 조건무을 중첩해 사용하는 것을 중첩 조건문이라고 한다.

---

### if else if 조건문

>if else 문을 중첩해도 상관 없지만 너무 과도하게 쓰여질 경우에는 알고리즘에 대해 생각해 봐야 한다.

기본문

if (<불 조건식>){  

} else if (<불 조건식>){  

} else{  

}  

>여기서 포인트는 개수에 초점을 두는 것은 아니다.
---

### switch 문

>if문 과는 달리 범위가 명확할 때 사용 한다. 

기본문

switch(<비교할 값>){  

    case <값> :  
    <문장>  
    break;  
  
    case <값> :  
    <문장>  
    break;  
  
    case <값> :  
    <문장>  
    break;  
}  

break : 조건문, 반복문을 빠져 나갈 때 사용한다.

---

### 삼항 연산자

<불 표현식> ? <참> : <거짓>

---

### prompt

>출력과 입력을 받는 메소드이다

기본

prompt("입력할 텍스트");

---

### 배열

>여러 개의 자료를 한꺼번에 다룰 수 있는 자료형이다.

기본)  

let array = [자료1, 자료2, 자료3, 자료4]  

>배열 안에 들어 있는 각 자료를 '요소'라고 한다.
>대괄호 안에 넣는 숫자를 '인덱스'라고 한다.

>배열 안에 어떤 요소(자료)가 들어와도 상관이 없다.
---

### while 반복문

기본)

while(<불 표현식>){
    //불 표현식이 참인 동안 실행할 문장
}

>(<불 표현식>) 안에 'true'를 넣게 되면 무한 루프로 만들수 있다.

> 배열명.length --> 배열의 크기를 반환한다.
> while 문은 크기를 모를 경우에 사용하면 효율이 좋다.

---

### for 반복문

기본)

for (<초기식>; <조건식 (반복횟수) >; <연산자>){
    //문장
}

> for문은 while문 과는 달리 반복 횟수가 명확 할 때 사용하면 좋다.


---
# 신정호 [202030421]
## [03월 23일]
### 오늘 배운 내용 요약

### 4주차


> 문자열을 배열로 이뤄져있다.

---

### 비교 연산자

== --> 같다 <br>
!= --> 다르다 (부정)

---
### 불

! --> 논리 부정 연산자  
|| --> 논리합 연산자
&& --> 논리곱 연산자 

---

### 변수

>값을 저장할 때 쓰이는 식별자로 모든 자료형을 저장할 수 있다.


1. 변수를 선언
    
2. 변수에 값을 대입한다.

ex) let pi;   
pi = 3.141592;

---

### 복합 대입 연산자

+= --> 숫자 덧셈 후 대입 연산자  
-= --> 숫자 뺄셈 후 대입 연산자  
*= --> 숫자 곱셈 후 대입 연산자  
/= --> 숫자 나눗셈 후 대입 연산자

---

### 증감연산자

변수++ --> 기존 변수 값에 1을 더한다. (후위)  
++변수 --> 기존 변수 값에 1을 더한다. (전위)  
변수-- --> 기존 변수 값에 1을 뺀다. (후위)  
--변수 --> 기존 변수 값에 1을 뺀다. (전위)

ex)

let number = 10;

console.log(number); --> 10  
console.log(++number); --> 11  
console.log(--number); --> 10  
console.log(number++); --> 10  
console.log(number--); --> 11

---

### 자료형 검사

typeof() --> 해당 변수의 자료형을 확인한다.

ex) typeof(10) --> number

---

### 강제 자료형 반환

Number() --> 숫자로 자료형을 반환한다.  
String() --> 문자열로 자료형 반환한다.  
Boolean() --> 불린 자료형을 반환한다.

#### NaN

>NaN은 무조건적으로 다르다.
>NaN인지 확인할 때는 isNaN()을 확인한다.

ex) console.log(nan == nan); --> false  
    console.log(nan != nan); --> true   
    console.log(isNaN(nan)); --> true

---
### 일치 연산자

=== --> 자료형과 값이 같은지 비교한다.

(많이 쓰이진 않는다)

### 상수

const --> 바뀌지 않는 값을 사용할 때 쓰인다.

상수를 사용하고 오류가 나면 let으로 바꾼다.

---

## 조건문

### if 조건문

가장 기본적인 조건문이다.

기본 모양)  

if (<불 조건식>) {    
   참 일때 실행    
}  

---

### if - else 조건문

기본 모양)   

if (<불 조건식>){    
   참 일때 실행    
} else {    
    거짓 일때 실행    
}  

---

### 중첩 조건문

조건문 안에 조건문을 중첩을 한 것을 중첩 조건문이라고 한다.

기본 모양)   
if (<불 조건식>){    
   if (<불 조건식>){    
   문장;       
} else {    
    문장;    
}    
}else{    
    if (<불 표현식>){    
        문장;    
   } else{    
       문장;    
    }    
}  

---

# 신정호 [202030421]
## [03월 16일]
### 오늘 배운 내용 요약

## 1장

>오늘날의 자바 스크립트는 서버 개발까지 가능할 정도로 발전했는데, 그 결과물이 "Node JS"이다.

>Node JS는 비동기 방식으로 실행되는데 처리의 흐름이 순차적으로 진행되지 않고 섞이는 것을 "비동기 방식"이라고 말합니다.

>이처럼 많은 발전을 이룬 자바스크립트는 웹, 앱, 게임, 서버 등 다양하게 쓰입니다.
---
### 자바스크립트 장점
>
>속도가 빠르다.
>다른 언어들과 달리 유지 비용이 낮다.
---
### 자바스크립트 단점
>
>데이터 처리와 예외처리가 복잡한 경향이 있다.

---
## 2장

### 표현식과 문장

>자바스크립트 코드도 다른 프로그래밍 언어와 같이 끝에 세미콜론(;)을 붙인다.
---
### 식별자
>식별자는 이름을 붙일때 사용한다. 이때 규칙을 지키면서 식별자를 생성해야 한다.

>1. 키워드를 사용하면 안된다.
>2. 특수 문자는 '_', '$'만 허용한다.
>3. 숫자로 시작하면 안된다.
>4. 공백은 입력하면 안된다.

---
### 출력

>가장 기본적인 출력 방법은 console 객체에 log() 객체를 사용하는 것이다.

>ex) console.log("문자열");

---
### 숫자 (연산자)

> '+' ---> 덧셈 연산자 <br>
>'_' ---> 뺄셈 연산자 <br>
>'*' ---> 곱셈 연산자 <br>
>'/' ---> 나눗셈 연산자 <br>
> '%' --> 나머지 연산자

>연산자 우선 순위는 사칙연산과 같다.

---
### 문자열

>문자열은 문자의 집합을 뜻한다. 기본적 문자열을 생성 시킬때 "", ''을 이용한다.

>주의 할 점은 따옴표를 일관 되게 사용해야 한다. ex) "문자열' 이 경우는 에러가 나온다.

>""문자열"" 이라고 생성하면 에러가 나기 때문에 이스케이프 문자를 사용한다.

>ex) "\"문자열\""
<<<<<<< HEAD

---
=======
>>>>>>> f514414f14cebd3c6653a8bb37e4a8ff1717eff7
