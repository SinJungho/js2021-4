// console.log(__filename);
// console.log(__dirname);

const fs = require("fs");
const { request } = require("node:http");
const file = fs.readFileSync('test.txt');

// console.log(file);
// console.log(file.toString());

// fs.readFile('test.txt', (error, file) =>{
//     if(error){
//         console.log("파일을 읽어 들이는데 문제가 발생했습니다.");
//         console.log(error);
//     } else{
//         console.log(file);
//         console.log(file.toString());
//     }
// });

const request = require("request");
request("https://naver.com", (error, response, body) =>{
    console.log(body);
});