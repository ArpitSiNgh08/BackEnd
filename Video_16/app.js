const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");



app.get("/", function (req, res){
    res.send("hey");
})

app.get("/create", async function(req, res){
    let user = await userModel.create({
        username: "harsh",
        age:25,
        email:"harsh@gmail.com",
    });

    res.send(user);
})

app.get("/post/create", async function(req, res){
    let post = await postModel.create({
        postdata: "hello saare log",
        user: "67a2575219c9ff56421d3714"
    })

    let user = await userModel.findOne({_id: "67a2575219c9ff56421d3714"});
    user.posts.push(post._id)
    await user.save();

    res.send({post, user});
})

app.listen(3000);