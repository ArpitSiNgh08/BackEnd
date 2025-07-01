// fundamentals of Javascript
// arrays and objects
// function return
//array js coding
// foreach map filter find index Of

//forEach
// var arr = [1,2,3,4];
// arr. forEach(function(val){
//     console.log(val + "Hello");
// })

//map function
// var arr =[1,2,3,4];    //map function ek same size ka nya khali array bnata hai aur answer me usko function ka solve karta hai aur uss answer ko fill kr deta hai empty spaces me
// var ans = arr.map(function(val){
//     return 13;
// })

//filter function
// var arr = [1,2,3,4];
// var ans = arr.filter(function(val){
//     if(val >= 3){return true}
//     else return false;
// })
// console.log(ans)

//find function
// var arr = [2,3,5,2]    //gives the value which is same, if two values are identical gives the first value
// var ans = arr.find(function(val){
//     if(val===2) return val;
// })
// console.log(ans)

//indexOf function
// var arr = [1,2,3,4,5,6,] //find functio ke result ka index dega
// var ans = arr.indexOf(5);
// console.log(ans);

// var obj = {
//     name : "arpit"
// }
// console.log(obj.name)
// //or
// console.log(obj['name'])

// Object.freeze(obj);   //cant change the values of object now


// //length of function and array
// var arr = [1,2,3,4,5,6,7]
// console.log(arr.length)
// function abcd (a,b,c){

// }
// console.log(abcd.length)    //length of function is parameters

//async js
async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

abcd();


//node.js basics
//introduction to node.js
//installing node.js and npm
//working with modules

//file system operations
// const fs = require('node:fs'); //node: hta do tb bhi work krega
//fs module ki saari chije ab const fs me aa gyi hai
//1)write file  2)append file 3)copy file 4)rename 5)unlink
// fs.writeFile("hey.txt", "hey hello kaise ho", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
// fs.appendFile("hey.txt", "mai toh acha hu", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
// fs.rename("hey.txt", "mai toh acha hu", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
// fs.copyFile("hello.txt", "./copy/chacha.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
// fs.unlink("hey.txt", function(err){
//     if(err)console.log(err);
//     else console.log("removed");
// })
// fs.rm("./copy", {rucursive:true}, function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })



//understanding http modules
// const http = require('node:http');
// const server = http.createServer(function(req, res){
//     res.end("Hello world");
// })
// server.listen(3000);



//NPM understanding
//installing and uninstalling anything basics and advanced
//install -> npm i packageKaNaam
//uninstall -> npm unistall packageKaNaam

//understanding node_modules

//dependencies - packages and packages ki dependencies
//devdependencies - aise packages jo sirf development mein kaam aayege par jab app ban jaayega aur deploy ho jaega tb hum inn packages ko use nhi karenge

//scripts - understanding default scripts PATH and custom scripts


//Express.js framework
//Introduction to Express.js
//express js ek npm package hai
//framework
//manages everything from the request and giving the response

//Setting up basic express application
const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)


app.use(express.json());  //url encoded data
app.use(express.urlencoded({extended: true}));


//Routing

app.get("/", function(req,res){
  res.send("champion mera arpit");
});

// app.get("/profile", function(req,res){
//   res.send("champion uska coach");
// });



//Middleware
//jb bhi server request accept karta hai wha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho, to ye element middleware kehlaata hai
app.use(function(req, res, next){
  console.log('middleware chala');
  next();
});


//Error Handling
app.use("/profile", function(req, res, next){
  return next(new Error("something went wrong"))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})



//Form Handling
//handle backend process of forms and making sure the data is coming form any frontend library, framework, templating engines, we still handle it at the backend

//Session - hum log kuch bhi data frontend pr rakh sakte hai and jb bhi aap kuch bhi request backend pr karoge vo frontend pe saved data automatically backend pe chala jaega
//line 143
app.listen(3000)