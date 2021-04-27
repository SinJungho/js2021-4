// let id = setInterval( () => {
//     console.log("print this");
// }, 1000);

// setTimeout(function () {
//     clearInterval(id);
// }, 3000);

// let foo;
// foo = function (){
//     console.log("첫번째 함수");
// }
// foo = () => {
//     console.log("두번째 함수");
// }

// foo();

// foo = function (){
//     console.log("첫번째 함수");
// }
// function foo(){
//     console.log("두번째 함수");
// }

// foo();
// let foo = ['apple', 'pineapple','watermelon'];
// let product = {
//     상품명: '건조 망고',
//     유형: '당절임',
//     원산지: '필리핀',
//     테스트: '2021',
//     print: function(){
//         console.log(`${this.상품명}의 가격은 ${this.유형}`);
//     }
// }
// console.log(foo[0]);
// // console.log(product['유형']);
//     for(let key in product){
//         console.log(`${key}: ${product[key]}`);
//     }
// product.print();    

let foo =[
    {name: "banana", price: 1200},
    {name: "apple", price: 2200},
    {name: "plum", price: 3200},
    {name: "peach", price: 4200},
    {name: "grafe", price: 5200},
    {name: "pineapple", price: 6200},
];

function bar(foo){
    console.log(`${foo.name}: ${foo.price}`);
} 

for(let foo1 of foo){
    bar(foo1);
}