// let date = new Date();

// console.log(date);

// date.setFullYear(date.getFullYear()+ 1);
// date.setMonth(date.getMonth()+11);
// date.setDate(date.setDate()+3);

// console.log(date);

// let now = new Date();
// let before = new Date('December 9, 1991');

// let interval = now.getTime() - before.getTime();
// interval = Math.floor(interval / (1000 * 60 * 60 * 24));
// console.log(interval);

// console.log(`태어나고 ${interval}일이 지났습니다.`);

// let foo = [52, 273, 32, 64, 72];

// console.log("----forEach----");
// foo.forEach((item, index) => {
//     console.log(`-${index}번째 요소는 ${item}입니다.`);
// });

// console.log("================================");
// console.log("----map----");
// let out1 = foo.map((item, index) => {
//     console.log(`${index} - ${item}`);
//     return item;
// });

// console.log(out1);

function callThreeTime(callback){
    for (let i = 0; i < 3; i++) {
        callback();        
    }
}

callThreeTime(function() {console.log("hello");});