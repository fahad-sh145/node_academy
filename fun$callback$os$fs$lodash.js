


// function add(a,b){
//     return a+b;
// }



// var add = (a,b)=>{
//     return a+b;
// }

//this is arrow function

// var add =(a,b)=>a+b;


// var result = add(2,9);
// console.log(result);

// (function(){
//     console.log("hii this is fahad");
// })(); 





//3 ways to define a callback function
//1.

// function fahback(){

//     console.log("hii this is fahad");
// }

// var sub =function(a,b,fahback){

//     var result =a-b; //main function
//     console.log(result);
//     fahback();
// }

// sub(5,3,fahback);



//2.
// var sub =function(a,b,bashir){

//     var result =a-b;
//     console.log(result);
//     bashir();
// }

// sub(10,2,function(){
//     console.log("hii this is fahad")
// });

//3.

// sub(10,4,()=>console.log("hii this is fahad"));



// var fs =require('fs');
// var os = require('os');


// var user = os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('fahad.txt','hi'+ user.username + '!\n',()=> console.log("callback"))

//both the way is correct//

// fs.appendFile('fahad.txt','hi'+ user.username + '!\n',()=>{
//     console.log("callback");
// });


// console.log("hello");



var bashir = require('./bashir.js');
console.log("hii");


const age = bashir.age;

var result =  bashir.addnum(age+2 ,10);

console.log(age);
console.log("result is :", result);


// var _ =require('lodash');



// var data=["person","person", 1,2,1,2,"age","name","name"];
// var filter = _.uniq(data);
// console.log(filter);