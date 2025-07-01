//initialize a project with npm
//express insta;;

//setting up parsers for form
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    // res.send("chal raha hai");
    //for ejs
    res.render("index");
})
app.get("/profile/:username", function(req, res){
    res.send(`Welcome, ${req.params.username}`);
})

app.get("/profile/:username/:age", function(req, res){
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
})
//setting up ejs for ejs pages
    //install ejs from npm
    //setup ejs as a view engine


//setting up public static files

//dynamic routing
//      dynamic routing
//      how to get data coming from frontend at backend route

app.listen(3000, function(){
    console.log("its running");
})
