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

> '+' ---> 덧셈 연산자
>'_' ---> 뺄셈 연산자
>'*' ---> 곱셈 연산자
>'/' ---> 나눗셈 연산자
> '%' --> 나머지 연산자

>연산자 우선 순위는 사칙연산과 같다.

---
### 문자열

>문자열은 문자의 집합을 뜻한다. 기본적 문자열을 생성 시킬때 "", ''을 이용한다.

>주의 할 점은 따옴표를 일관 되게 사용해야 한다. ex) "문자열' 이 경우는 에러가 나온다.

>""문자열"" 이라고 생성하면 에러가 나기 때문에 이스케이프 문자를 사용한다.

>ex) "\"문자열\""
