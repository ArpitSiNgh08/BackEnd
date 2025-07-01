const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cookieParser());
// app.get("/", function (req, res){
//     res.cookie("name", "harsh");
//     res.send("done");
// })
// app.get("/read", function(req, res){
//     console.log(req.cookies)
//     res.send("read page");
// })


// app.get("/", function(req, res){
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("myPlaintextPassword", salt, function(err, hash) {
//             console.log(hash);
//         });
//     });
// })
// app.get("/", function(req, res){
//     bcrypt.compare("myPlaintextPassword", "$2b$10$C0lugpy7.BLTzmnUPMRwuul4h.sTgq8SSZND83.wVm67UpllB0I8y", function(err, result) {
//         console.log(result);
//     });
// })


app.get("/", function(req, res){
    let token = jwt.sign({email: "arpit@example.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
})
// app.get("/read", function(req, res){
//     console.log(req.cookies.token);
// })
app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})





app.listen(3000);